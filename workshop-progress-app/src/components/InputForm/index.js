import React from "react";

function InputForm(props) {
	return (
		<div>
			<div>
				<input className="workshop-name" />
			</div>
			<div>
				<input className="date" type="date" />
			</div>
			<div>
				<label>Select your progress </label>
			
			<select className="progress" name="progress">
				<option value="0">0%</option>
				<option value="25">25%</option>
				<option value="50">50%</option>
				<option value="100">100%</option>
			</select>
			</div>

			<div>
			<label>Select your mood </label>
			<select className="mood-btns" name="mood">
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

			<button className="submit-btn" onClick={props.onClick}>
				SUBMIT
			</button>
		</div>
	);
}

export default InputForm;
