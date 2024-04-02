import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {
   // let postsData = [
   //    {id: 1, message: 'Hi', likesCount: 5},
   //    {id: 2, message: 'Yo', likesCount: 15},
   //    {id: 3, message: 'Yo', likesCount: 25}
   // ]
   let postsElement = props.postsData.map ((p) => <Post message = {p.message} count = {p.likesCount} />)
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
        {postsElement}
         </div>

      </div>
   )
}
export default Posts;