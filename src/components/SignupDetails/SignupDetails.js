import React, { useState } from 'react';
import './SignupDetails.css'
import Circle from '../Circle/Circle';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserDetails } from '../../features/counterSlice';
function SignupDetails() {

  const [name, setName] = useState('')
  const [male, setMale] = useState('')
  const [female, setFemale] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const addDetails = (e, gender) => {
    e.preventDefault()
    if(name && gender){
         localStorage.setItem('name', name)
         localStorage.setItem('gender', gender)
            navigate('/city-details')
          }
    
    // if(male){
    //   if(name){
    //     dispatch(addUserDetails({
    //       name: name,
    //       gender:male
    //     }))
    //     navigate('/city-details')
    //   }
    // }
    // else if(female){
    //   if(name){
    //     dispatch(addUserDetails({
    //       name: name,
    //       gender:female
    //     }))
    //     navigate('/city-details')
    //   }
    // }

  }
  return (
    <>
      <h2 className='signup_details_title'>Help us know you better!</h2>
        <Circle borderOne blue />
        <Circle borderTwo />
        <Circle borderThree />
        <div className='border'></div>
      
      <h4 className='signup_details_heading'>What should we call you?</h4>
      <form onSubmit={addDetails}>
      <div className='signup_details_input'>
        <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter your name'/>
      </div>
      <h4 className='signup_details_text'>Gender</h4>
      <div onClick={(e) => {
        setMale('male')
        addDetails(e,male)
      }} className='signup_details_image_container_one'>
      <img className='signup_details_image_one' src='images/man.png'/>

      </div>
      <div onClick={(e) => {
        setFemale('female')
        addDetails(e,female)
      }} className='signup_details_image_container_two'>
      <img className='signup_details_image_two' src='images/woman.png'/>

      </div>
      </form>
      <img className="footer_background" src="images/rectangle.png" />
			<img className="footer_image" src="images/businessman.png" />
    </>
  )
}

export default SignupDetails