import React, { useState } from "react";
import "./App.css";
import UserInput from "../UserInput";
import { WorkshopList } from "../WorkshopList";

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

   function handleClick(e) {
      const value = e.target.value;
      setData(value);
      console.log("handleClick has been called",value);
   }

   return (
      <section>
         <UserInput handleClick={handleClick} />
         {/* <WorkshopList /> */}
      </section>
   );
}

export default App;

//plan
// useState for data to store data. [done]
//handleclick function upon add task button being clicked.[done]
//use event.target.value to capture data.[done]
