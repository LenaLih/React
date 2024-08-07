import React from 'react';
import s from './NavBar.module.css';
import {NavLink}  from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { useSelector } from 'react-redux';



const NavBar = (props) => {
   const friendsData = useSelector(state => state.sidebar?.friendsData);
   return (
  
<nav className={s.nav}>
   <ul className= {s.list}>
   <li className= {s.item}><NavLink to='/Profile'>Profile</NavLink></li>
   <li className= {s.item}><NavLink to='/Dialog'>Messages</NavLink></li>
   <li className= {s.item}><NavLink to='/News'>News</NavLink></li>
   <li className= {s.item}><NavLink to='/Music'>Music</NavLink></li>
   <li className= {s.item}><NavLink to='/Setting'>Setting</NavLink></li>
   {/* <li className={s.title}><NavLink to='/friends'>Friends</NavLink></li> */}
   </ul>
   {/* <Sidebar friendsData = {props.state.sidebar.friendsData}/> */}
   <div>
   
  <Sidebar friendsData = {friendsData}/>
   </div>
   
</nav>





   )
}


export default NavBar;