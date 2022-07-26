import React, { useState } from 'react'
import './TrendingRole.css'

function TrendingRole({title, exp}) {
    const [experience, setExperience] = useState('')
    const [titles, setTitles] = useState('')

    const addExp = () => {
        localStorage.setItem('experience', experience)
        setExperience(exp)
    }
    const addTitle = () => {
        localStorage.setItem('titles', titles)
        setTitles(title)
    }
  return (
    <div className='trending_role'>
        <span onClick={addTitle} className='trending_role_text'>{title}</span>
        <span onClick={addExp} className='trending_role_text'>{exp}</span>
    </div>

  )
}

export default TrendingRole