import React from 'react'
import HomeLeft from './HomeLeft/HomeLeft'
import HomeRight from './HomeRight/HomeRight'
import "./banner.scss"

const Banner = () => {
  return (
    <div className="Banner">
    <HomeLeft/>
    <HomeRight/>
    </div>
  )
}

export default Banner