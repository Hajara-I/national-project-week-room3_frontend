import React, { useState, useEffect } from "react";
import "./App.css";
//import { sampleData } from "./workshop-data";
import InputForm from "../InputForm";
import Workshops from "../Workshops";
import { API_URL } from "../../config.js/index.js";

//const API_URL = "http://localhost:3001/";
function App() {
   const [workshops, setWorkshops] = useState([]);
   //const [workshopEntry, setWorkshopEntry] = useState();

   useEffect(() => {
      async function getWorkshops() {
         try {
            const response = await fetch(
               `${API_URL}workshops`
               //method: "GET",
               //headers: { "Content-Type": "application/json" },
            );
            const data = await response.json();
            if (data.success === true) {
               console.log(data);
               //setUsers(data.payload);
               //setError("");
            } else {
               // setError("Fetch didn't work :(");
               console.log("Fetch didn't work");
            }
         } catch (err) {
            //console.warn(jqxhr.responseText);
            console.log(err);
            // setError(err.message);
         }
      }
      getWorkshops();
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
         <div className="form-container">
            <InputForm onClick={addNewWorkshop} />
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
