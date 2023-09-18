import React from 'react';
import './Profile.css'
import Card from './card';
import pfp from './200px.jpg';

const mockProfile = [
  {
    info_id: 0,
    profile_id: 1,
    full_name: "Potato putute",
    weight: 56,
    height: 178,
    date_of_birth: 230409,
  }
]

const mockInfo = [
  {
    id:0,
    activity_id:"Yoga"
  },
  {
    id:1,
    activity_id:"Cardio"
  },
  {
    id:2,
    activity_id:"Running"
  },
  {
    id:3,
    activity_id:"RUN"
  },
  {
    id:4,
    activity_id:"ABS"
  },
  {
    id:5,
    activity_id:"Other"
  },

]

const Profile = () => {
  return (
    <div>
      <div className='profile-banner flex'>
        <div className='profile-image'><img src={pfp} alt="holder image" /></div>
        <div className='profile-name flex-1'>place holder <br /> I don't know how to display profile</div> 
      </div>
      <div className='activity-showcase' >
        <div className='card-container card w-96 bg-base-100 shadow-xl '>
          {mockInfo.map((item) => (
            <Card
              id={item.id}
              activity_id={item.activity_id}
            ></Card>
          ))}
        </div>
      </div>         
    </div>
  )
}

export default Profile