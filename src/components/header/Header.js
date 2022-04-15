import React from 'react'
import './Header.css'
import {Avatar} from "@material-ui/core";
 function Header() {
  return (
    <div className='head'>
    <h2 className='name-web'>STUDENT AID</h2>
    <div className='username'>Home</div>
    <div className='username'>About</div>
    <div className='category'>Category</div>
    <div className='history'>History</div>
    <div><Avatar variant="circular" /></div>
    </div>
  )
}

export default Header;