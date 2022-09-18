import React from 'react'
import Form from './Form'
import TopDonaters from './TopDonaters'
import "./restaurant.scss"
import Maps from '../components/maps'
const Restaurant = () => {
  return (
    <div className='Restaurant'>
       
        <Form/>
    
       

        <TopDonaters/>
        <Maps/>
        
        
    </div>
  )
}

export default Restaurant