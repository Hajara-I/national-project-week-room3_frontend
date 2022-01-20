import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
//import { sampleData } from "./workshop-data";
import InputForm from "../InputForm";
import Workshops from "../Workshops";
import Navbar from "../Nav";
import WorkshopDetails from "../WorkshopDetails";
import { API_URL } from "../../config";

function App() {
	const [workshops, setWorkshops] = useState([]);
	//const [workshopEntry, setWorkshopEntry] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(`${API_URL}workshops`);
				const data = await response.json();
				console.log(data);
			} catch (error) {
				console.log("Not working");
			}
		};
		getData();
	}, []);

	function addNewWorkshop() {
		const newWorkshop = {
			name: document.querySelector(".workshop-name").value,
			date: document.querySelector(".date").value,
			progress: document.querySelector(".progress").value,
			mood: document.querySelector(".mood-btns").value,
		};
		setWorkshops([...workshops, newWorkshop]);
		console.log(workshops);
	}

	//function deleteWorkshop() {}

	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<InputForm onClick={addNewWorkshop} />} />
						<Route path="/all-workshops" element={<Workshops />} />
						<Route path="/workshops/:id" element={<WorkshopDetails />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;

//PLAN
// Components
// Form - DONE
// name input field
// date input dropdown
// percentage complete dropdown
// emoji button
// Submit button - adds the input
// WorkshopList
// List of inputs
