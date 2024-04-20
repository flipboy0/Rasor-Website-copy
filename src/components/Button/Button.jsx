import React from 'react'
import "./Button.css"
const Button = (props) => {
  return (
 <>
        <a href={props.link} className="hvr-sweep-to-right">{props.label}</a>
      
  </>
  )
}

export default Button