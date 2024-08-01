
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';




const Sidebar = (props) => {
  


   return (

      <div className={s.nav}>
         <h2 className={s.title}><NavLink to='/friends'>Friends</NavLink></h2>

         <div className={s.friend}>

            
         </div>

      </div>




   )
}


export default Sidebar;