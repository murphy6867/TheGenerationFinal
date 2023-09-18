import React from 'react';
import './Profile.css'

const Profile = () => {
  return (
    <div>
      //navbar here
      <div>
        <div id='profile-image'></div>
        <div id='profile-name'></div> 
      </div>
      <div id='record-stat'></div>
      <div id='data'>
        <div id='stat-graph'></div>
        <div id='cal-graph'></div>
        <div id='water-graph'></div>
      </div>         
    </div>
  )
}

export default Profile