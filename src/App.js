import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
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
    <BrowserRouter >
    <div className = 'app-wrapper'>
    <Header  />
    <NavBar state = {props.state}/>

    
    <div className = 'app-wrapper-content' >
      
    <Routes>
      <Route path='/Profile' element={<Profile postsData ={props.state.profilePage.postsData}/>}/>
      <Route path='/Dialog*'element={<Dialogs dialogsData = {props.state.messagePage.dialogsData} messagesData = {props.state.messagePage.messagesData}/>}/>
      <Route path='/News'element={<News />}/>
      <Route path='/Music'element={<Music />}/>
      <Route path='/Setting'element={<Setting />}/>
      <Route path='/Sidebar'element={<Sidebar  friendsData ={props.state.sidebar.friendsData}/>}/>
    
    </Routes>
          
    

    </div>

    </div> 
    </BrowserRouter>

  );
}

export default App;
