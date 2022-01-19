import React from "react";

function UserInput({ handleChange, handleClick }) {
   return (
      <div className="App">
         <form className="user-form">
            <p>Workshop Name</p>
            <input
               type="text"
               className="berries"
               name="workshop"
               placeholder="Enter a workshop name"
               onChange={handleChange}
            />
            <input type="date" name="Date" />
            <input name="Progress" placeholder="How far did you get?" />
            <br />
            <br />
            <hr />

            <input type="radio" className="emoji" name="mood" value="good" />
            <span aria-label=" grin smile" role="img">
               😃
            </span>

            <input type="radio" className="emoji" name="mood" value="good" />
            <span aria-label="simple smile" role="img">
               🙂
            </span>

            <input type="radio" className="emoji" name="mood" value="fair" />
            <span aria-label="neutral face" role="img">
               😐
            </span>

            <input type="radio" className="emoji" name="mood" value="poor" />
            <span aria-label="disappointed face" role="img">
               😞
            </span>

            <input type="radio" className="emoji" name="mood" value="poor" />
            <span aria-label="weary" role="img">
               😩
            </span>

            <br />
            <br />
            <button onClick={handleClick}>Add Task</button>
         </form>
      </div>
   );
}

export default UserInput;
