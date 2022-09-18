import React from 'react'
import "./donations.scss"
const Donations = () => {
  return (
    <div className='Donations'>
        <h1 className='Donations-Heading'>Whether You want to donate or<br/> looking for Donations</h1>
        <p className='Donations-paragraph'>We can help you move forward</p>

        <div className="cards">

        <div className="donor">
            <h3 className='card-heading'>Contribute as Donor</h3>
            <p>Lorem ipsum dolor Suscipit asperiores magnam officiis tempore hic error! Hic voluptatibus dolores repellendus quibusdam quo neque delectus voluptas autem laboriosam!</p>
            <button className='Donors-Button'>Donate</button>
        </div>

        <div className="volunteer">
            <h3 className='card-heading'>Contribute as Donor</h3>
            <p>Lorem ipsum dolor Suscipit asperiores magnam officiis tempore hic error! Hic voluptatibus dolores repellendus quibusdam quo neque delectus voluptas autem laboriosam!</p>
            <button className='Donors-Button'>Donate</button>
        </div>
        </div>

    </div>
  )
}

export default Donations