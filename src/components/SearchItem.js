import React from 'react'

export default (props)=>(

    <div>
    
    <h4>name : {props.profile.nameOf} - family : {props.profile.family} - id : {props.profile.id}</h4>
    <button disabled={props.buttonText === 'already added'} onClick={props.onclick}>{props.buttonText}</button>  
    </div>
    
)