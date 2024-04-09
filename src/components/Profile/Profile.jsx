import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPost from './MyPost/MyPost';
import Posts from './Posts/Posts';

const Profile = (props) => {
 
   return (
      <div className={s.body}>
         <ProfileInfo />
      <MyPost />
      <Posts postsData = {props.state.postsData}/>

      </div>
   )
}
export default Profile;