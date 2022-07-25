import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import PhoneSignup from "./components/PhoneSignup/PhoneSignup";

function App() {
	return (
		<div className="app">
			<Navbar />
			<div className="app_body">
				<Routes>
					<Route path="/" element={<PhoneSignup />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
