import React from "react";

function UserInput({ handleChange, handleClick, text }) {
   return (
      <div className="App">
         <form className="user-form">
            <label>
               Workshop Name:{" "}
               <input
                  type="text"
                  name="workshop"
                  placeholder="Enter a workshop name"
                  value={text.name}
                  onChange={handleChange}
               />
            </label>
            <br />

            <input
               type="date"
               name="Date"
               value={text.date}
               onChange={handleChange}
            />
            <br />

            <label>
               0%
               <input
                  type="radio"
                  name="progress"
                  value={text.progress}
                  onChange={handleChange}
               />
            </label>
            <label>
               25%
               <input
                  type="radio"
                  name="progress"
                  value={text.progress}
                  onChange={handleChange}
               />
            </label>
            <label>
               50%
               <input
                  type="radio"
                  name="progress"
                  value={text.progress}
                  onChange={handleChange}
               />
            </label>
            <label>
               100%
               <input
                  type="radio"
                  name="progress"
                  value={text.progress}
                  onChange={handleChange}
               />
            </label>

            <br />
            <br />
            <hr />

            <div onChange={handleChange}>
               <input
                  type="radio"
                  className="emoji"
                  name="mood"
                  value={text.mood}
               />
               <span aria-label=" grin smile" role="img">
                  &#128515;
               </span>

               <input
                  type="radio"
                  className="emoji"
                  name="mood"
                  value={text.mood}
               />
               <span aria-label="neutral face" role="img">
                  &#128528;
               </span>

               <input
                  type="radio"
                  className="emoji"
                  name="mood"
                  value={text.mood}
               />
               <span aria-label="weary" role="img">
                  &#128553;
               </span>
            </div>

            <br />
            <br />
            {/* <input type="submit" value="Add Task" /> */}
            <button onClick={handleClick}>Add Task</button>
         </form>
      </div>
   );
}

export default UserInput;
