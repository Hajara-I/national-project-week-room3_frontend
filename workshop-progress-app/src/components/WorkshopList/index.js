import { Link } from "react-router-dom";

const WorkshopList = ({ workshops, title }) => {
	return (
		<div className="workshop-list">
			<div>
				<h3 className="list-title">{title}</h3>
			</div>
			{workshops.payload.map((workshop) => (
				<div className="workshop-preview" key={workshop.id}>
					<div className="preview-top-container">
						<h3>{workshop.name}</h3>
						<p className="preview-progress">{workshop.progress}%</p>
					</div>
					<div className="preview-bottom-container">
						<p className="preview-date">{workshop.date}</p>
						<p className="preview-mood">
							You rated your performance as {workshop.mood}
						</p>
					</div>
					<Link to={`/workshops/${workshop.id}`}>
						<div className="preview-btns-container">
							<button className="edit-btn">Edit</button>
							<button className="dlt-btn">Delete</button>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};
export default WorkshopList;

// function newDate() {
// 	let date = workshop.date;
// 	let newDate = date.toLocaleDateString();
// 	return newDate;
// }

// function changeBGColor() {
// 	if (workshop.progress === 25) {
// 		document.querySelectorAll(".workshop-preview").className = "low";
// 	} else if (workshop.progres === 50) {
// 		document.querySelector(".workshop-preview").className = "medium";
// 	} else if (workshop.progres === 100) {
// 		document.querySelector(".workshop-preview").className = "high";
// 	}
// }
