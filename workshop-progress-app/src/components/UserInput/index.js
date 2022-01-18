import React from "react";

function UserInput({ handleClick, data }) {
   return (
      <div className="App">
         <form className="user-form">
            <p>Workshop Name</p>
            <input
               type="text"
               name="Workshop-name"
               placeholder="Enter a workshop name"
            />
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
            <button onClick={handleClick}>Add Task</button>
         </form>
      </div>
   );
}

export default UserInput;
