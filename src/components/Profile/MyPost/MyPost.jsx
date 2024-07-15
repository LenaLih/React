import React from 'react';
import s from './MyPost.module.css';

const MyPost = (props) => {
   return (
      <div className= {s.body}>

         <div className={s.ava}>
            <img src='https://media.istockphoto.com/id/808022474/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-%D0%BF%D0%B0%D1%85%D0%BD%D1%83%D1%8E%D1%89%D0%B0%D1%8F-%D1%86%D0%B2%D0%B5%D1%82%D0%BA%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=ixgsHIXZaczcRuad92JtQCRPmx7ioROKy57JotE6ntU='></img>
         </div>
        

      </div>
   )
}
export default MyPost;