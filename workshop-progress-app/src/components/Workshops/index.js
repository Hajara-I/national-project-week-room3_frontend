import { useEffect, useState } from "react";
import WorkshopList from "../WorkshopList/index";

function Workshops({ name, date, progress, mood }) {
	const [workshops, setWorkshops] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const handleDelete = () => {};
	useEffect(() => {
		fetch("https://workshop-tracker.herokuapp.com/workshops")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setWorkshops(data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);
	return (
		//two examples of conditional rendering below
		//logical && and ternary
		<div className="home">
			<div className="main-list-title-container">
				<h2 className="main-list-title">Your journey at a glance</h2>
			</div>
			{isLoading && <div>Loading...</div>}
			{workshops && (
				<WorkshopList
					workshops={workshops}
					title={"All Workshops"}
					handleDelete={handleDelete}
				/>
			)}
			{/* {workshops ? (
				<WorkshopList
					workshops={workshops.filter((workshop) => workshop.mood === "good")}
					title={"Workshops you felt went well"}
				/>
			) : (
				<div>Loading...</div>
			)} */}
		</div>
	);
}

export default Workshops;

// Plan for delete button
