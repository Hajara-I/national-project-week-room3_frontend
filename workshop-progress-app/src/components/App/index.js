import React, { useState } from "react";
import "./App.css";
import UserInput from "../UserInput";
import { WorkshopList } from "../WorkshopList";
import { sampleData } from "./workshop-data";

function App() {
   // const [text, setText] = useState("");
   const [data, setData] = useState([{}]);

   const handleChange = (e) => {
      e.preventDefault();
      const newObject = {
         id: data.length + 1,
         name: e.target.name,
         date: e.target.date,
         progress: e.target.progress,
         mood: e.target.mood,
      };
      setData([{...data, newObject}]);
   };

   console.log("App re-rendered. ", data);

   const handleSubmit = (e) => {
      e.preventDefault();

   };

   // function handleClick(e) {
   //    const value = e.target.progress.value;
   //    setData(value);
   //    console.log("handleClick has been called",value);
   // }

   // function addNewWorkshop () {
   //    const newData = {name: document.querySelector(".berries").value};
   //    setData({...data, newData})

   // }

   return (
      <section>
         <UserInput handleSubmit={handleSubmit} handleChange={handleChange} data={data}/>
         <div>
            {data.map(function (item) {
               return (
                  <div key={item.id}>
                     <p key={item.id}></p>
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
