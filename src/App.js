import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import PhoneSignup from "./components/PhoneSignup/PhoneSignup";
import SignupOtp from "./components/SignupOtp/SignupOtp";
import SignupDetails from './components/SignupDetails/SignupDetails'
import CityDetails from "./components/CityDetails/CityDetails";
import RoleDetails from "./components/RoleDetails/RoleDetails";

function App() {
	return (
		<div className="app">
			<Navbar />
			<div className="app_body">
				<Routes>
					<Route path="/" element={<PhoneSignup />} />
          <Route path="/otp" element={<SignupOtp />} />
          <Route path="/details" element={<SignupDetails />} />
          <Route path="/city-details" element={<CityDetails />} />
          <Route path="/role" element={<RoleDetails />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
