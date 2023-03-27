import React from 'react'
import "./Navbar.css"
import DateTime from '../dateTime/DateTime'


function Nav() {
  return (
    <div className='bg'>
      <div className='shopName'>
        <p>CyberNet IT</p>
      </div>
        <div className='dateTime'>
          <p className='date'><DateTime/></p>
        </div>
      <div className='bg2'></div>
    </div>      
  )
}

export default Nav