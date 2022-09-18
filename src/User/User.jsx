import React from 'react'
import Card from './Card'
import "./user.scss"
import Maps from "../components/maps"
const User = () => {
  return (
    <div className='Main-Body'>
      <div className="Users">
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Maps/>
      <div className="right-Part">Right</div>
    </div>
  )
}

export default User