// import React from 'react';
// import { Route, Routes} from 'react-router-dom';
// import './App.css';
// import Dialogs from './components/Dialogs/Dialogs';
// import Header from './components/Header/Header';
// import Music from './components/Music/Music';
// import NavBar from './components/NavBar/NavBar';
// import News from './components/News/News';
// import Profile from './components/Profile/Profile';
// import Setting from './components/Setting/Setting';
// import Friends from './components/Sidebar/Friends/Friends';
// import Sidebar from './components/Sidebar/Sidebar';




// const App = (props) => { 

//   return ( 
    
//     <div className = 'app-wrapper'>
//     <Header  />
//     <NavBar state = {props.state}/>
//     <Sidebar  state = {props.state} />

    
//     <div className = 'app-wrapper-content' >
      
//     <Routes>
//     <Route path='/Profile' element={<Profile state ={props.state.profilePage} dispatch = {props.dispatch}/>}/>
//       <Route path='/Dialog*'element={<Dialogs state = {props.state.messagePage} dispatch = {props.dispatch}/>}/>
//       <Route path='/News'element={<News />}/>
//       <Route path='/Music'element={<Music />}/>
//       <Route path='/Setting'element={<Setting />}/>
//       {/* <Route path='/Sidebar'element={<Sidebar  state ={props.state.sidebar}/>}/> */}
//       <Route path='/Friends'element={<Friends />}/>
//     </Routes>
          
    

//     </div>

//     </div> 
   

//   );
// }

// export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Setting from './components/Setting/Setting';
import Friends from './components/Sidebar/Friends/Friends';
import Sidebar from './components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';

const App = () => {
  const profilePage = useSelector((state) => state.profilePage);
  const messagePage = useSelector((state) => state.messagePage);

  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
     

      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/Profile' element={<Profile profilePage={profilePage} />} />
          <Route path='/Dialog' element={<Dialogs messagePage={messagePage} />} />
          <Route path='/News' element={<News />} />
          <Route path='/Music' element={<Music />} />
          <Route path='/Setting' element={<Setting />} />
          <Route path='/Friends' element={<Friends />} />
        </Routes>
      
      </div>
    </div>
  );
};

export default App;

