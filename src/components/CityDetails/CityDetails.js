import React, { useState } from "react";
import "./CityDetails.css";
import Circle from "../Circle/Circle";
import CityNames from "./CityNames/CityNames";
import { useNavigate } from "react-router-dom";


function CityDetails() {
	const [preferedCity, setPreferedCity] = useState("");
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const addCityDetails = (e) => {
        e.preventDefault()
        if(preferedCity && email){
			localStorage.setItem('preferedCity',preferedCity)
			localStorage.setItem('email',email)
			navigate('/role')

		}
			
			
        }
        
    


	return (
		<>
			<h4 className="city_details_title">Help us know you better!</h4>
			<Circle borderOne blue />
			<Circle borderTwo blue />
			<Circle borderThree />
			<div className="border"></div>
            <form onSubmit={addCityDetails}>
			<h4 className="city_details_address_title">
				Where can we reach you?
			</h4>
			<div className="city_details_address_input">
				<input value={email}
					onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email address" />
			</div>
			<h4 className="city_details_preferred">Prefered city to work?</h4>
			<div className="city_details_preferred_input">
				<input
					placeholder="Eg Bengaluru Mumbai"
					value={preferedCity}
					onChange={(e) => setPreferedCity(e.target.value)}
				/>
			</div>
			<img
				className="city_details_preferred_logo"
				src="images/down.png"
			/>
			<h4 className="city_details_select_title">
				Top cities you may prefer:
			</h4>
			<CityNames />
            <button style={{display: 'none'}} type='submit'>Submit</button>
            </form>
			<img className="footer_background" src="images/rectangle.png" />
			<img className="footer_image" src="images/point.svg" />
		</>
	);
}

export default CityDetails;
