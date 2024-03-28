import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = () => {
   return (

      <div className={s.list}>
         <h3>My posts</h3>
         <div className={s.newItem}>
            <h3>New posts</h3>
         </div>
         <div>
            <textarea></textarea>
         </div>
         <div className={s.button}>
            <button>Add post</button>
         </div>
         <div className={s.post}>
            <Post count='5' message='Hi' />
            <Post count='50' />
         </div>

      </div>
   )
}
export default Posts;