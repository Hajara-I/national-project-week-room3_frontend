import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputForm(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [progress, setProgress] = useState("0");
  const [mood, setMood] = useState("good");
  const [isloading, setIsLoading] = useState(false);

  //   useNavigate is helpful for redirecting the user
  const navigate = useNavigate();

  // creating a workshop object to POST into db
  const handleSubmit = (e) => {
    e.preventDefault();
    const workshop = { name, date, progress, mood };

    //setting state to inform user that post is pending
    setIsLoading(true);

    fetch("https://workshop-tracker.herokuapp.com/workshops", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workshop),
    }).then(() => {
      console.log("New workshop added!");
      setIsLoading(false);
      // redirecting the user to the home path after they've added a workshop
      navigate("/all-workshops");
    });
  };

  return (
    <div>
      <h2>Add a Workshop</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="workshop-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="date"
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Select your progress </label>

          <select
            className="progress"
            name="progress"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
          >
            <option value="0">0%</option>
            <option value="25">25%</option>
            <option value="50">50%</option>
            <option value="100">100%</option>
          </select>
        </div>

        <div>
          <label>Select your mood </label>
          <select
            className="mood-btns"
            name="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option
              aria-label="weary"
              role="img"
              value="poor"
              className="mood-poor"
            >
              {" "}
              😩{" "}
            </option>
            <option
              aria-label="neutral face"
              role="img"
              value="fair"
              className="mood-fair"
            >
              {" "}
              😐{" "}
            </option>
            <option
              aria-label="grin face"
              role="img"
              value="good"
              className="mood-good"
            >
              {" "}
              😀{" "}
            </option>
          </select>
        </div>
        <button className="submit-btn">SUBMIT</button>
      </form>
    </div>
  );
}

export default InputForm;
