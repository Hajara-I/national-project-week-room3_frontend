import React from "react";

function UserInput({ handleChange, handleSubmit, data}) {
   return (
      <div className="App">
         <form className="user-form" onSubmit={handleSubmit}>
            <label>Workshop Name: <input
               type="text"
               name="workshop"
               placeholder="Enter a workshop name"
               value={data.name}
               onChange={handleChange}/></label>
            <br/>
           
            <input type="date" name="Date" value={data.date}
            onChange={handleChange}/>
            <br/>
            
            <label>0%<input type="radio" 
            value={data.progress}
            onChange={handleChange}/></label>
            <label>25%<input type="radio" name="progress" /></label>
            <label>50%<input type="radio" name="progress"/></label>
            <label>75%<input type="radio" name="progress"/></label>
            <label>100%<input type="radio" name="progress"/></label>

            <br />
            <br />
            <hr />

            <div>
               <input type="radio" className="emoji" name="mood" value="good" value={data.mood}
               onChange={handleChange}/>
            <span aria-label=" grin smile" role="img">
               😃
            </span>

            <input type="radio" className="emoji" name="mood" value="fair" value={data.mood}
               onChange={handleChange} />
            <span aria-label="neutral face" role="img">
               😐
            </span>

            <input type="radio" className="emoji" name="mood" value="poor" value={data.mood}
               onChange={handleChange} />
            <span aria-label="weary" role="img">
               😩
            </span>
            </div>

            <br />
            <br />
            <input type="submit" value="Add Task" />
         </form>
      </div>
   );
}

export default UserInput;
