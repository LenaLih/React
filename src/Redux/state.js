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
   //  addPost (postMessage)  {
   //    let newPost = {
   //       id: 6,
   //       message: postMessage,
   //       likesCount: 5
   //    };
   //    this._state.profilePage.postsData.push(newPost);
   // }, 
   
    addNewMessage (newMessage)  {
   
      let message = {
         id: +1,
         message: newMessage,
         
      };
     this._state.messagePage.messagesData.push(message);
   },
   dispatch(action) {
      if (action.type === 'ADD-POST') {
         let newPost = {
            id: 6,
            message: postMessage,
            likesCount: 5
         };
         this._state.profilePage.postsData.push(newPost);
         this._state.profilePage.postsData = action.newPost;
      };
      // } else if (action.type === 'ADD-NEW-MESSAGE') {
      //    let message = {
      //       id: 6,
      //       message: newMessage,
            
      //    };
      //   this._state.messagePage.messagesData.push(message);
      //   this._state.messagePage.messagesData.message = action.newMessage;
      // }
   // }
   
},
};
export default store;
window.store = store;