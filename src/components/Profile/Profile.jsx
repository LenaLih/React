// import React from 'react';
// import s from './Profile.module.css';
// import ProfileInfo from './ProfileInfo/ProfileInfo';
// import MyPost from './MyPost/MyPost';
// import Posts from './Posts/Posts';

// const Profile = (props) => {
 
//    return (
//       <div className={s.body}>
//          <ProfileInfo />
//       <MyPost />
//       <Posts postsData = {props.state.postsData} dispatch = {props.dispatch}/>
//       </div>
//    )
// }
// export default Profile;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import s from './Profile.module.css';
// import ProfileInfo from './ProfileInfo/ProfileInfo';
// import MyPost from './MyPost/MyPost';
// import Posts from './Posts/Posts';
// import { addPostActionCreator } from '../../Redux/profilePage-reducer';

// const Profile = () => {
//   // Получаем данные из Redux состояния
//   const profilePage = useSelector((state) => state.profilePage);
//   const dispatch = useDispatch();

//   // Обработка добавления нового поста
//   const handleAddPost = (newPostText) => {
//     dispatch(addPostActionCreator(newPostText));
//   };

//   return (
//     <div className={s.body}>
//       <ProfileInfo />
//       <MyPost />
//       <Posts postsData={profilePage.postsData} dispatch={dispatch} />
//     </div>
//   );
// };

// export default Profile;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPost from './MyPost/MyPost';
import Posts from './Posts/Posts';
import { addPostActionCreator } from '../../Redux/profilePage-reducer';

const Profile = () => {
    const profilePage = useSelector((state) => state.profilePage);
    const dispatch = useDispatch();

    return (
        <div className={s.body}>
            <ProfileInfo />
            <MyPost />
            <Posts postsData={profilePage.postsData} dispatch={dispatch} />
        </div>
    );
};

export default Profile;

