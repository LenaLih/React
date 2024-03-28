import React from 'react';
import s from './NavBar.module.css';
import {NavLink}  from 'react-router-dom';


const NavBar = () => {
   return (
      <nav className={s.nav}>
   <ul className= {s.list}>
   <li className= {s.item}><NavLink to='/Profile'>Profile</NavLink></li>
   <li className= {s.item}><NavLink to='/Dialog'>Messages</NavLink></li>
   <li className= {s.item}><NavLink to='/News'>News</NavLink></li>
   <li className= {s.item}><NavLink to='/Music'>Music</NavLink></li>
   <li className= {s.item}><NavLink to='/Setting'>Setting</NavLink></li>
   </ul>
</nav>
   )
}


export default NavBar;