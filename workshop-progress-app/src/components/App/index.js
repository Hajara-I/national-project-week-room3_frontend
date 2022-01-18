import React, { useState, useRef } from "react";
import "./App.css";
import UserInput from "../UserInput";
import { WorkshopList } from "../WorkshopList";
import { sampleData } from "./workshop-data";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      name: "Koala",
      date: "17/01/2022",
      progress: 50,
      mood: "poor",
    },
  ]);

  const handleChange = (event) => {
    const input = event.target.value;
    setText(input);
    // console.log("handleChange function has been called", value);
  };

  const handleClick = (e) => {
    setText("");
    e.preventDefault();
    const newObject = {
      id: 2,
      name: text,
      date: "18/01/2022",
      progress: 100,
      mood: "good",
    };
    setData([...data, newObject]);
    console.log(data);
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
      <UserInput handleClick={handleClick} handleChange={handleChange} />
      <div>
        {data.map(function (item) {
          return (
            <div>
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
