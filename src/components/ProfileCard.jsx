import React from 'react'
import Avatar from './Avatar'
import UserProfile from './UserProfile'
import './ProfileCard.css'

const ProfileCard = ({user}) => {

    const name = `${user.first_name} ${user.last_name}`

  return <section key={user.id} id={`user-${user.id}`} className='profile-card'>
    <Avatar name={name} url={user.avatar}/>
    <UserProfile name={name} email={user.email}/>
  </section>
}

export default ProfileCard