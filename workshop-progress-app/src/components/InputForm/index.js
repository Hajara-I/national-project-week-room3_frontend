import React from "react";

function InputForm(props) {
	return (
		<div>
			<input className="workshop-name" />
			<input className="date" type="date" />
			<label>Choose your progress</label>
			<select className="progress" name="progress">
				<option value="0">0%</option>
				<option value="25">25%</option>
				<option value="50">50%</option>
				<option value="100">100%</option>
			</select>

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

			<button className="submit-btn" onClick={props.onClick}>
				Submit
			</button>
		</div>
	);
}

export default InputForm;
