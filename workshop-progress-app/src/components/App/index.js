import React, { useState } from "react";
import "./App.css";
import UserInput from "../UserInput";
import { WorkshopList } from "../WorkshopList";
import { workshopData } from "./workshop-data";

function App() {
   const [data, setData] = useState([
      {
         id: 1,
         name: "Koala",
         date: "17/01/2022",
         progress: "I love CSS",
         mood: "poor",
      },
   ]);

   // function handleClick(e) {
   //    const value = e.target.progress.value;
   //    setData(value);
   //    console.log("handleClick has been called",value);
   // }

   function addNewWorkshop () {
      const newData = {name: document.querySelector(".berries").value};
      setData({...data, newData})
      
   }
   console.log("handleClick has been called",data);
   return (
      <section>
         <UserInput onClick={addNewWorkshop} />
         <div>
            {data.map(function (item) {
               return <div>
                     <p handleChange={addNewWorkshop}>{item.name}</p>
                     <p handleChange={addNewWorkshop}>{item.date}</p>
                  </div>
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
