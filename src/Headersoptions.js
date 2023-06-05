import React from 'react'
import "./css/header.css"
import { Avatar } from '@material-ui/core';

function Headersoptions({ Icon , title, avatar}) {
  return (
    <div className='header__options'> 
    {
        Icon && <Icon></Icon>
    }
    {
        avatar && <Avatar name = {avatar}/>
    }
    <span>{title}</span>
    </div>
  )
}

export default Headersoptions