


let store = {
   _state:  {
      profilePage: {
         postsData: [{
               id: 1,
               message: 'Hi',
               likesCount: 5
            },
            {
               id: 2,
               message: 'Yo',
               likesCount: 15
            },
            {
               id: 3,
               message: 'Yo',
               likesCount: 25
            },
            {
               id: 4,
               message: 'Yo',
               likesCount: 2
            },
         ]
      },
      messagePage: {
         dialogsData: [{
               id: 1,
               name: 'Alisa'
            },
            {
               id: 2,
               name: 'Lena'
            },
            {
               id: 3,
               name: 'Anastasia'
            },
            {
               id: 4,
               name: 'Marta'
            },
            {
               id: 5,
               name: 'Jroslav'
            },
         ],
   
         messagesData: [{
               id: 1,
               message: 'Hi'
            },
            {
               id: 2,
               message: 'Hove ara you'
            },
            {
               id: 3,
               message: 'Yo'
            },
            {
               id: 4,
               message: 'Yo'
            },
         ],
   
   
      },
    
      sidebar: {
        friendsData: [{
         id: 1,
         name: 'Alisa'
      },
      {
         id: 2,
         name: 'Lena'
      },
      {
         id: 3,
         name: 'Anastasia'
      },
      {
         id: 4,
         name: 'Marta'
      },
      {
         id: 5,
         name: 'Jroslav'
      },
     ]
   
      },
      
      newsPage: {
         newsData: [
            {},{}
         ]
      },
      musicPage: {},
      settingPage: {}
   },
   getState ()  {
      return this._state;
   },
   dispatch(action) {
      if (action.type === 'ADD-POST') {
         let newPost = {
            id: this._state.profilePage.postsData.length + 1,
            message: action.newPost,
            likesCount: 0
         };
         this._state.profilePage.postsData.push(newPost);
         // this._state.profilePage.postsData = action.newPost;
      }
         else if (action.type === 'ADD-NEW-MESSAGE') {
         let newMessage = {
            id: this._state.messagePage.messagesData.length + 1,
            message: action.newMessage
         };
         
      //    this._state.messagePage.messagesData.message = action.newMessage;
         this._state.messagePage.messagesData.push(newMessage);
      }
   },

}

export const addPostActionGreator = (newPostText) => {
   return {
      type:'ADD-POST',
      newPost: newPostText
   }
}
export const addNewMessageActionCreator = (newMessageText) => {
   return { 
      type:'ADD-NEW-MESSAGE', 
   newMessage: newMessageText
}
}

export default store;
window.store = store; 