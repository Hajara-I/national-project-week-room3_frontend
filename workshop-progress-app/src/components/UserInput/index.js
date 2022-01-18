import React, {useState} from "react";

function UserInput(props) {

   const [text, setText] = useState("");

   function handleChange (e) {
      const value = e.target.value;
      setText(value);
      console.log("handleChange function has been called", value);
   }

   return (
      <div className="App">
         <form className="user-form">
            <p>Workshop Name</p>
            <input type="text" className="berries" name="workshop" placeholder="Enter a workshop name" onChange={(e)=>{handleChange(e)}} />
            <input type="date" name="Date" />
            <input name="Progress" placeholder="How far did you get?" />
            <br />
            <br />
            <hr />
            <input type="radio" className="emoji" name="mood" value="poor" />
            <label>:(</label>

            <input type="radio" className="emoji" name="mood" value="fair" />
            <label>:|</label>

            <input type="radio" className="emoji" name="mood" value="good" />
            <label>:)</label>

            <br />
            <br />
            <button onClick={props.onClick}>Add Task</button>
         </form>
      </div>
   );
}

export default UserInput;
