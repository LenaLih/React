import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Setting from './components/Setting/Setting';
import Sidebar from './components/Sidebar/Sidebar';




const App = (props) => { 

  return ( 
    
    <div className = 'app-wrapper'>
    <Header  />
    <NavBar state = {props.state}/>

    
    <div className = 'app-wrapper-content' >
      
    <Routes>
    <Route path='/Profile' element={<Profile state ={props.state.profilePage} dispatch = {props.dispatch}/>}/>
      <Route path='/Dialog*'element={<Dialogs state = {props.state.messagePage} dispatch = {props.dispatch}/>}/>
      <Route path='/News'element={<News />}/>
      <Route path='/Music'element={<Music />}/>
      <Route path='/Setting'element={<Setting />}/>
      <Route path='/Sidebar'element={<Sidebar  state ={props.state.sidebar}/>}/>
    
    </Routes>
          
    

    </div>

    </div> 
    // </BrowserRouter>

  );
}

export default App;
