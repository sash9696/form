import React, { useState } from "react";
import "./PhoneSignup.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";

function PhoneSignup() {
	const [number, setNumber] = useState("");
	const [error, setError] = useState("");
	const [selected, setSelected] = useState(false);
	const navigate = useNavigate();

	console.log(selected);

	const getOtp = (e) => {
		e.preventDefault();

		if (number === "" || number === undefined || number.length < 10)
			return setError("Please enter a valid phone number!");
		if (selected) {
			navigate("/otp");
		}
	};
	return (
		<>
			<form onSubmit={getOtp}>
				<h2 className="entermobile_title">Your mobile number?</h2>
				<div className="entermobile_input_box">
					<PhoneInput
						inputClass="entermobile_input"
						// inputStyle={{
						//   backgroundColor: "lightblue",
						//   position: 'absolute',
						//   border: 'none',
						//   outline: 0,
						// }}
						defaultCountry="IN"
						value={number}
						onChange={setNumber}
						placeholder="Enter Phone Number"
						international
					/>
					<button style={{ display: "none" }}>Submit</button>
					{/* <input  type='number'/> */}
				</div>
				<div>
					<input
						value={selected}
						onChange={(e) => setSelected(e.target.checked)}
						className="entermobile_checkbox"
						type="checkbox"
					/>
					<p className="entermobile_terms">
						By checking you confirm that you accept our Terms and
						conditions and have read our Privacy Policy
					</p>
				</div>
			</form>
			<div>{error}</div>
			<img className="footer_background" src="images/rectangle.png" />
			<img className="footer_image" src="images/suit.png" />
		</>
	);
}

export default PhoneSignup;
