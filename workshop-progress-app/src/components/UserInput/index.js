import React from "react";

function UserInput() {
   return (
      <div className="App">
         <form className="user-form">
            <input type="text" name="Workshop-name" />
            <input type="text" name="Date" />
            <input type="text" name="Progress" />

            <input type="radio" id="poor" name="mood" value="poor" />
            <label for="poor">poor</label>
            <br />
            <input type="radio" id="fair" name="mood" value="fair" />
            <label for="fair">fair</label>
            <br />
            <input type="radio" id="good" name="mood" value="good" />
            <label for="good">good</label>
            <br />
            <br />
            <button type="submit">Add Task</button>
         </form>
      </div>
   );
}

export default UserInput;
