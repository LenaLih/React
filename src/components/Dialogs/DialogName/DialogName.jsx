import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogName = (props) => {
  let path = '/dialog/' + props.id;
  return <div className={s.link}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>

}



export default DialogName;