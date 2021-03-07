import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StateContext } from '../../../../App';

import './ProfilerListingPage.css'

const ProfilerListingPage = () => {
  const [context, dispatchAction] = useContext(StateContext);
  const { data } = context;

  const handleClick = (uuid) => {
    const profile = data.filter((f) => f.uuid === uuid);
    dispatchAction({ type: 'SET_PROFILE', profile });
  };

  return (
    <>
      <ul className="profile-listing-page">
        {data &&
          data.map(({ picture, name, email, uuid }) => (
            <li onClick={() => handleClick(uuid)} className="profile-listing-page-item" key={uuid}>
              <Link to='/profile-page'>
                <div className="profile-holder">
                  <img src={picture} alt='profile pic' className="profile-image"/>
                  <div className="user-details">
                    <p>{name}</p>
                    <p>{email}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ProfilerListingPage;
