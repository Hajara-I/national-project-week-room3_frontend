import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const WorkshopDetails = () => {
  // destructuring id out of params from index.js in App
  const { id } = useParams();

  // state for initial fetch and render
  const [workshop, setWorkshop] = useState();

  // loading to manage time it takes to fetch and navigation which will lead users to another page
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // grabbing states that can be put in a patch request.
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [progress, setProgress] = useState("0");
  const [mood, setMood] = useState("good");

  // fetching data that will populate in the input field so user can see old inputs
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(`https://workshop-tracker.herokuapp.com/workshops/${id}`, {
      signal: abortCont.signal,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWorkshop(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
    return () => abortCont.abort();
  }, [id]);

  // Update a record / patch request

  const handleSubmit = (e) => {
    e.preventDefault();
    const workshop = { name, date, progress, mood };
    setIsLoading(true);

    fetch("https://workshop-tracker.herokuapp.com/workshops", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workshop),
    }).then(() => {
      console.log("New workshop added!");
      setIsLoading(false);
      // redirecting the user to the home path after they've updated an entry
      navigate("/all-workshops");
    });
  };

  // delete function

  const handleDelete = () => {
    fetch(`https://workshop-tracker.herokuapp.com/workshops/${id}`, {
      method: "DELETE",
    }).then(() => {
      setWorkshop(null);
      setIsLoading(false);
      navigate("/all-workshops");
    });
  };

  // rendering below
  return (
    <div className="input-form-container-outer">
      {isLoading && <div>Loading...</div>}
      {workshop && (
        <div className="input-form-container-inner">
          <h2 className="input-form-header">Edit Workshop</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className="workshop-name"
                required
                defaultValue={workshop.payload[0].name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="date">
              <input
                className="date"
                type="date"
                required
                defaultValue={workshop.payload[0].date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="progress-label">
              <label>Progress </label>

              <select
                className="progress"
                name="progress"
                defaultValue={workshop.payload[0].progress}
                onChange={(e) => setProgress(e.target.value)}
              >
                <option value="0">0%</option>
                <option value="25">25%</option>
                <option value="50">50%</option>
                <option value="100">100%</option>
              </select>
            </div>

            <div className="mood-label">
              <label>Mood </label>
              <select
                className="mood"
                name="mood"
                defaultValue={workshop.payload[0].mood}
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
            <div className="button-div">
            <button className="submit-btn">SAVE CHANGES</button>
            <button className="submit-btn" onClick={handleDelete}>DELETE</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default WorkshopDetails;
