import React, { useState } from "react";
import "./App.css";
import UserInput from "../UserInput";
// import { WorkshopList } from "../WorkshopList";
// import { sampleData } from "./workshop-data";

function App() {
	const [text, setText] = useState("");
	const [data, setData] = useState([
		{
			id: 10,
			name: "Express",
			date: "17/01/2022",
			progress: 50,
			mood: "fair",
		},
	]);

	// const handleChange = (e) => {
	//    e.preventDefault();
	//    const newObject = {
	//       id: data.length + 1,
	//       name: e.target.name,
	//       date: e.target.date,
	//       progress: e.target.progress,
	//       mood: e.target.mood,
	//    };
	//    setData([{...data, newObject}]);
	// };

	// console.log("App re-rendered. ", data);

	// const handleSubmit = (e) => {
	//    e.preventDefault();
	// };
	const handleChange = (event) => {
		const input = event.target.value;
		setText(input);
		console.log(input, text);
	};

	const handleClick = (e) => {
		setText("");
		e.preventDefault();

		const newObject = {
			id: data.length + 1,
			name: text,
			date: text.date,
			progress: text.progress,
			mood: text.mood,
		};
		console.log(e.target.date);
		setData([...data, newObject]);
	};

	return (
		<section>
			<UserInput
				handleClick={handleClick}
				handleChange={handleChange}
				data={data}
			/>
			<div className="data">
				{data.map(function (item) {
					return (
						<div key={item.id}>
							<p>{item.id}</p>
							<p>{item.name}</p>
							<p>{item.date}</p>
							<p>{item.progress}</p>
							<p>{item.mood}</p>
						</div>
					);
				})}
			</div>

			{/* <WorkshopList /> */}
		</section>
	);
}

export default App;

//plan
// useState for data to store data. [done]
//handleclick function upon add task button being clicked.[done]
//use event.target.value to capture data.[done]
