import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import s from './Sidebar.module.css';




const Sidebar = (props) => {

   let friendElement = props.friendsData.map((f) => <Friend name={f.name} id={f.id} />);

   return (

      <div className={s.nav}>
         <h2 className={s.title}><NavLink to='/friends'>Friends</NavLink></h2>

         <div className={s.friend}>

            {friendElement}
         </div>


      </div>




   )
}


export default Sidebar;