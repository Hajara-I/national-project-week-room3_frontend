function Workshops({ name, date, progress, mood }) {
	return (
		<div className="workshops">
			<article>
				<h4>{name}</h4>
				<h5>{date}</h5>
				<h5>{progress}</h5>
				<h5>{mood}</h5>
				<button>Delete entry</button>
			</article>
		</div>
	);
}

export default Workshops;
