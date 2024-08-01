
// import { configureStore } from "@reduxjs/toolkit";
// import messagePeageReduser from "./messagePage-reducer";
// import profilePageReducer from "./profilePage-reducer";
// import {combineReducers } from 'redux';




// export const rootReducer = combineReducers({
  
//    profilePage: profilePageReducer,
//    messagePage: messagePeageReduser,
   
// })

//  const store = configureStore({
//    reducer: rootReducer
// })
// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import profilePageReducer from "./profilePage-reducer";
// import messagePageReducer from "./messagePage-reducer";

// // Создаем хранилище с объединением редьюсеров
// const store = configureStore({
//   reducer: {
//     profilePage: profilePageReducer,
//     messagePage: messagePageReducer,
//   }
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import profilePageReducer from "./profilePage-reducer";
import messagePageReducer from "./messagePage-reducer";
import { combineReducers } from 'redux';
import sidebarReducer from "./sidebar-reducer";

const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    sidebar: sidebarReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
