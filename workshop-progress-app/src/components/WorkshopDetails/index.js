import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const WorkshopDetails = () => {
	// destructuring id out of params from index.js in App
	const { id } = useParams();
	const [workshop, setWorkshop] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();
	useEffect(() => {
		const abortCont = new AbortController();
		fetch(`http://localhost:8000/workshops/${id}`, { signal: abortCont.signal })
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setWorkshop(data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err.message);
			});
		return () => abortCont.abort();
	}, [id]);
	const handleDelete = () => {
		fetch(`http://localhost:8000/workshops/${id}`, {
			method: "DELETE",
		}).then(() => {
			setWorkshop(null);
			setIsLoading(false);
			navigate("/all-workshops");
		});
	};
	return (
		<div>
			<div>
				<input className="workshop-name" />
			</div>
			<div>
				<input className="date" type="date" />
			</div>
			<div>
				<label>Select your progress </label>

				<select className="progress" name="progress">
					<option value="0">0%</option>
					<option value="25">25%</option>
					<option value="50">50%</option>
					<option value="100">100%</option>
				</select>
			</div>

			<div>
				<label>Select your mood </label>
				<select className="mood-btns" name="mood">
					<option
						aria-label="weary"
						role="img"
						value="poor"
						className="mood-poor"
					>
						{" "}
						😩{" "}
					</option>
					<option
						aria-label="neutral face"
						role="img"
						value="fair"
						className="mood-fair"
					>
						{" "}
						😐{" "}
					</option>
					<option
						aria-label="grin face"
						role="img"
						value="good"
						className="mood-good"
					>
						{" "}
						😀{" "}
					</option>
				</select>
			</div>

			<button
				className="submit-btn"
				// onClick={props.onClick}
			>
				SAVE CHANGES
			</button>
		</div>
	);
};
export default WorkshopDetails;
