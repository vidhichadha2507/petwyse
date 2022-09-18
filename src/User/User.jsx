import React from 'react'
import Card from './Card'
import "./user.scss"

const User = () => {
  return (
    <div className='Main-Body'>
      <div className="Users">
        <Card/>
        <Card/>
        <Card/>
      </div>

      <div className="right-Part">Right</div>
    </div>
  )
}

export default User