import React from "react";
import "./Circle.css";

function Circle({ borderOne , borderTwo , borderThree , blue }) {
	return (
		<>
			{borderOne && (
				<>
					<div className={blue ? "circle_one blue" : 'circle_one grey'}></div>
					<span className="one">1</span>
				</>
			)}
			{borderTwo && (
				<>
					<div className={blue ? "circle_two blue" : 'circle_two grey'}></div>
					<span className="two">2</span>
				</>
			)}
			{borderThree && (
				<>
					<div className={blue ? "circle_three blue" : 'circle_three grey'}></div>
					<span className="three">3</span>
				</>
			)}
		</>
	);
}

export default Circle;
