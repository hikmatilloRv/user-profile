import React from 'react';
import './Avatar.css';

 const Avatar = ({name, url}) => {
    return (
       <img 
       className='profile-avatar'
       width={128} 
       height={128} 
       alt={name} src={url}/>
    )
 }


 export default Avatar;