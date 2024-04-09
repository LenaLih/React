import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Sidebar.module.css';




const Sidebar = (props) => {

   let friendElement = props.friendsData.map((f) => <Friends name={f.name} id={f.id} />);

   return (
  
<div className={s.nav}>
 <h2 className={s.title}><NavLink>Friends</NavLink></h2>

 <div className={s.friend}>

{ friendElement }
 </div>

  
</div>




   )
}


export default Sidebar;