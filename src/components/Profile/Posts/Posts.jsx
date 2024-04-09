import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = (props) => {
   let newPostElement = React.createRef();
   let addPost = ()=> {
      let text = newPostElement.current.value;
      alert(text);
   } 
   let postsElement = props.postsData.map ((p) => <Post message = {p.message} count = {p.likesCount} />)
   return (

      <div className={s.list}>
         <h3>My posts</h3>
         <div className={s.newItem}>
            <h3>New posts</h3>
         </div>
         <div>
            <textarea ref={newPostElement}></textarea>
         </div>
         <div className={s.button}>
            <button onClick={ addPost }>Add post</button>
         </div>
         <div className={s.post}>
        {postsElement}
         </div>

      </div>
   )
}
export default Posts;