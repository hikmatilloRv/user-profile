import React from "react";
import './UserProfile.css'

const UserProfile = ({name, email}) => {

    const mailto = `mailto: ${email}`

    return(
        <div className="user-info">
            <h2 className='profile-name'>{name}</h2>
            <h3 className='profile-email'>
                <a href={mailto}>{name}</a>
            </h3>
        </div>
    )
}




export default UserProfile;