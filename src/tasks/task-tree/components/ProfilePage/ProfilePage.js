import React, { useContext } from 'react';
import { StateContext } from '../../../../App';

import './ProfilePage.css'

const ProfilePage = () => {
  const [context] = useContext(StateContext);
  const { profile } = context
  const { picture, name, email, details } = context && profile[0]

  return (
    <>
      <div className="profile-page">
        <div className="profile-page-header">
          <img src={picture} alt="profile" className="profile-image-profile-page"/>
          <div className="user-details">
            <p>{name}</p>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
        <p>{details}</p>
      </div>
    </>
  )
}

export default ProfilePage;