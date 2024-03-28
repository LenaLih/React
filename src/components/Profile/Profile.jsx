import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPost from './MyPost/MyPost';

const Profile = () => {
   return (
      <div>
         <ProfileInfo />

         <MyPost />

      </div>
   )
}
export default Profile;