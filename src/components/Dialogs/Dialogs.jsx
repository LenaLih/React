import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogName = (props) => {
  let path = '/dialog/' + props.id;
    return <div className= {s.link}>
          <NavLink to={path}>{props.name}</NavLink>
        </div>
    
}
const Massage = (props) => {
  return <div className= {s.massage}>{props.massage}</div>
}
const Dialogs = (props) => {
  return (
    <div className= {s.dialogsItems}>
      <div className= {s.dialogsItem}>
        <DialogName name = 'Alisa' id = '1' />
        <DialogName name = 'Lena' id = '2' />
        <DialogName name = 'Anastasia' id = '3' />
        <DialogName name = 'Marta' id = '4' />
        <DialogName name = 'Jroslav' id = '5' />
      </div>
      <div className= {s.massages}>
        <Massage massage='Hi' />
        <Massage massage='Hove ara you' />
        <Massage massage='Yo' />
        
      </div>
    </div>

  );
}


export default Dialogs;