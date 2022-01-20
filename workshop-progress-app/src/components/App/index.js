import React, { useState, useEffect } from "react";
import "./App.css";
//import { sampleData } from "./workshop-data";
import InputForm from "../InputForm";
import Workshops from "../Workshops";

function App() {
  const [workshops, setWorkshops] = useState([]);
  //const [workshopEntry, setWorkshopEntry] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://workshop-tracker.herokuapp.com/`);
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
    <div className="App">
        <div><h1 className="header">Workshop Tracker</h1>
     </div>
      <div className="form-container-outer">
      <div className="form-container">
        <InputForm onClick={addNewWorkshop} />
      </div>
      </div>
      <br />
      <br />
      <div className="workshop-container">
        {workshops.map(function (item, index) {
          return (
            <Workshops
              key={index}
              name={item.name}
              date={item.date}
              progress={item.progress}
              mood={item.mood}
            />
          );
        })}
      </div>
    </div>
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
