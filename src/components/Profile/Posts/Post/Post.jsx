import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
   return (


      <div className={s.Item}>
         
         <div className={s.ava}>
            <img src='https://shop-cdn1-2.vigbo.tech/shops/19661/products/21612973/images/3-a5029c863128167fb8cacc6702247f10.png'></img>
            <div className={s.link}>Post</div>
         </div>
         <div className={s.message}>
               { props.message }
         </div>
         
         <div>
            Like : { props.count }
         </div>
         
         
         
      </div>


   )
}
export default Post;