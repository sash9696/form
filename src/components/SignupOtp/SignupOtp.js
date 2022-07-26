import React, { useState } from "react";
import "./SignupOtp.css";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useNavigate } from "react-router-dom";

function SignupOtp() {
	const [OTP, setOTP] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const validateOtp = (e) => {
		e.preventDefault();
		if (OTP.length < 4) return setError("Enter Valid Otp");
		navigate("/details");
	};
	return (
		<>
			<form className="signupOtp_container" onSubmit={validateOtp}>
				<p className="signupOtp_title">Enter the OTP</p>
				<OTPInput
					value={OTP}
					onChange={setOTP}
					autoFocus
					OTPLength={4}
					otpType="number"
					disabled={false}
					secure
					inputStyle="signupOtp_input"
					containerStyle
				/>
				<button style={{ display: "none" }}>Submit</button>
				<a href="#">Resend Otp</a>
			</form>
			<div>{error}</div>
			<img className="footer_background" src="images/rectangle.png" />
			<img className="footer_image" src="images/notifications.png" />
		</>
	);
}

export default SignupOtp;
