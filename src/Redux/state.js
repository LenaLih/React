let state = {
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
};
export let addPost = (postMessage) => {
   let newPost = {
      id: 6,
      message: postMessage,
      likesCount: 5
   };
   state.profilePage.postsData.push(newPost);
}; 

export let addNewMessage = (newMessage) => {

   let message = {
      id: 6,
      message: newMessage,
      
   };
   state.messagePage.messagesData.push(message);
};


export default state;
