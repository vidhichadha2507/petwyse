import React from 'react'
import "./donations.scss"
const Donations = () => {
  return (
    <div className='Donations'>
        <h1 className='Donations-Heading'>Whether You want to donate or<br/> looking for Donations</h1>
        <p className='Donations-paragraph'>We can help you move forward</p>

        <div className="cards">

        <div className="donor">
            <h3 className='card-heading'>Users</h3>
            <p>Willing users can click here to assign themselves the left over food from the restaurants closest to their locality.</p>
            <button className='Donors-Button'>Dashboard</button>
        </div>

        <div className="volunteer">
            <h3 className='card-heading'>Restaurants</h3>
            <p>Restaurants need to fill the form type preference ,animal,weight and location.To give the clear idea to the volunteers to provide food to the animals.</p>
            <button className='Donors-Button'>Dashboard</button>
        </div>
        </div>

    </div>
  )
}

export default Donations