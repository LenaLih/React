// import React from 'react';
// import { useState } from 'react';
// import Post from './Post/Post';
// import s from './Posts.module.css';
// import { addPostActionGreator } from '../../../Redux/profilePage-reducer';


// const Posts = (props) => {

//    const [newPostText, setNewPostText] = useState('');

//    const addPosts = () => {
//       if (newPostText.trim() !== '') {
//          props.dispatch(addPostActionGreator(newPostText));
//          setNewPostText('');
//       };
//    };


//    let postsElement = (props.postsData || []).map ((p) => <Post key={p.id} message = {p.message} count = {p.likesCount} />)
//    return (

//       <div className={s.list}>
//          <h3>My posts</h3>
//          <div className={s.newItem}>
//             <h3>New posts</h3>
//          </div>
//          <div>
          
//             <textarea placeholder='Message' value={newPostText} onChange={(p) => setNewPostText(p.target.value)} />

//          </div>
//          <div className={s.button}>
//             <button onClick={ addPosts }>Add post</button>
//          </div>
//          <div className={s.post}>
//         {postsElement}
//          </div>

//       </div>
//    )
// }
// export default Posts;


// Posts.js
// 
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from './Post/Post';
import s from './Posts.module.css';
import { addPostActionCreator } from '../../../Redux/profilePage-reducer';

const Posts = ({ postsData, dispatch }) => {
    const [newPostText, setNewPostText] = useState('');

    const handleAddPost = () => {
        if (newPostText.trim() !== '') {
            dispatch(addPostActionCreator(newPostText));
            setNewPostText('');
        }
    };

    const postsElement = (postsData || []).map((p) => (
        <Post key={p.id} message={p.message} count={p.likesCount} />
    ));

    return (
        <div className={s.list}>
            <h3>My posts</h3>
            <div className={s.newItem}>
                <h3>New posts</h3>
            </div>
            <div>
                <textarea
                    placeholder='Message'
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                />
            </div>
            <div className={s.button}>
                <button onClick={handleAddPost}>Add post</button>
            </div>
            <div className={s.post}>{postsElement}</div>
        </div>
    );
};

export default Posts;
