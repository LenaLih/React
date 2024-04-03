import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogName = (props) => {
  let path = '/dialog/' + props.id;
  return (
    <div className={s.body}>
      <div className={s.ava}>
  <img src='https://shop-cdn1-2.vigbo.tech/shops/19661/products/21612973/images/3-a5029c863128167fb8cacc6702247f10.png'></img>
</div>
        <div className={s.link}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
  
    </div>

  )
  

}



export default DialogName;