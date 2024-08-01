import React from 'react';
import s from './Friend.module.css';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';



const Friend = (props) => {
   let path = '/Friends/' + props.id;


   return (
      <div className={s.users}>
         <div className={s.ava}>
            <img src='https://shop-cdn1-2.vigbo.tech/shops/19661/products/21612973/images/3-a5029c863128167fb8cacc6702247f10.png'></img>
         </div>
         <div className={s.user}>
            <NavLink to={path}>{props.name}</NavLink>
         </div>
   
      </div>





   )
}


export default Friend;