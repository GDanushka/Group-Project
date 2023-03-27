import React, { useState } from 'react'
import './Sidebar.css'
import { SidebarData } from '../../App/Data';


function Sidebar() {
  const [selected,Setelected] =useState(0);

  return (
    <div className='Sidebar'>  
      <div className='Actions'>
        {SidebarData.map((item,index)=>{
          return(
            <div className='itemlist'>
              <div className='menuItem'>
              <div className={selected===index?"menuItem active":"menuItem" } 
              key={index}
              onClick={()=>Setelected(index)}>

                  <item.icon/>
                  <span className='Iheading'>
                  {item.heading}
                  
                </span>
            </div>
            </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar