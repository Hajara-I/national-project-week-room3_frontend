import { Link } from "react-router-dom";

const WorkshopList = ({ workshops, title }) => {
  return (
    <div className="workshop-list">
      <h3>{title}</h3>
      {workshops.payload.map((workshop) => (
        <div className="workshop-preview" key={workshop.id}>
          <h3>{workshop.name}</h3>
          <p>{workshop.date}</p>
          <p>You completed {workshop.progress}%</p>
          <p>You rated your performance as: {workshop.mood}</p>
          <Link to={`/workshops/${workshop.id}`}>
            <button>Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default WorkshopList;
