import React, { Children } from 'react'
import classes from './Button.module.css'

function Button({Children}) {
  return (
    <button className='btn'>{'Children'}</button>
  )
}

export default Button