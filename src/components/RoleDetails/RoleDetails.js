import React, { useState } from "react";
import "./RoleDetails.css";
import Circle from "../Circle/Circle";
import TrendingRole from "./TrendingRole/TrendingRole";
import axios from "axios";

function RoleDetails() {
	const [role, setRole] = useState("");
	const [success, setSuccess] = useState("");

	const submitForm = async (e) => {
		e.preventDefault()
		const body = {
			name: localStorage.getItem('name'),
			gender: localStorage.getItem('gender'),
			email: localStorage.getItem('email'),
			preferred_city: localStorage.getItem('preferedCity'),
			roles: [localStorage.getItem('titles')],
			experience: localStorage.getItem('experience'),
		};
		const response = await axios.post("https://api.fastjobs.io/frontendtask", body)
		setSuccess(response.data.message)

	};
	return (
		<div>
			<Circle borderOne blue />
			<Circle borderTwo blue />
			<Circle borderThree blue />
			<div className="border"></div>
			<form onSubmit={submitForm}>
				<h4 className="role_title">Role you are looking for?</h4>
				<div className="role_input">
					<input
						value={role}
						onChange={(e) => setRole(e.target.value)}
						placeholder="Eg Web Developer"
					/>
				</div>
				<img className="role_logo" src="images/down.png" />
				<h4 className="role_trending">Trending Roles:</h4>
				<div className="trending_roles">
					<TrendingRole title="Frontend Developer" />
					<TrendingRole title="UI Developer" />
					<TrendingRole title="Web Developer" />
				</div>
				<h4 className="role_exp">How many years of work experience</h4>
				<div className="roles_exp">
					<TrendingRole exp="Fresher" />
					<TrendingRole exp="1-2 years" />
					<TrendingRole exp="3-6 years" />
					<TrendingRole exp="6+ years" />
				</div>
				<h1>{success}</h1>
			</form>
			<img className="footer_background" src="images/rectangle.png" />
			<img className="footer_image" src="images/sit.svg" />
		</div>
	);
}

export default RoleDetails;
