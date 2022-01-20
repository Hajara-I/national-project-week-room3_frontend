import { Link } from "react-router-dom";

const WorkshopList = ({ workshops }) => {
	return (
		<div className="workshop-list">
			<h3>{title}</h3>
			{workshops.map((workshop) => (
				<div className="workshop-preview" key={workshop.payload.id}>
					<h3>{workshop.payload.name}</h3>
					<p>{workshop.payload.date}</p>
					<p>You completed {workshop.payload.progress}%</p>
					<p>You felt {workshop.payload.mood}</p>
					<Link to={`/workshops/${workshop.payload.id}`}>
						<button>Edit</button>
					</Link>
				</div>
			))}
		</div>
	);
};
export default WorkshopList;
