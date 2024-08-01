// const initialState = {
//    messagePage: {
//       dialogsData: [{
//             id: 1,
//             name: 'Alisa'
//          },
//          {
//             id: 2,
//             name: 'Lena'
//          },
//          {
//             id: 3,
//             name: 'Anastasia'
//          },
//          {
//             id: 4,
//             name: 'Marta'
//          },
//          {
//             id: 5,
//             name: 'Jroslav'
//          },
//       ],

//       messagesData: [{
//             id: 1,
//             message: 'Hi'
//          },
//          {
//             id: 2,
//             message: 'Hove ara you'
//          },
//          {
//             id: 3,
//             message: 'Yo'
//          },
//          {
//             id: 4,
//             message: 'Yo'
//          },
//       ],


//    }, 
// }

// const messagePeageReduser = (state = initialState, action) => {
//    switch (action.type) {
//       case 'ADD-NEW-MESSAGE':
//          let newMessage = {
//             id: state.messagesData.length + 1,
//             message: action.newMessage
//          };
         
//          state.message = action.newMessage;
//          state.messagesData.push(newMessage); 
//          return state;
   
//       default:
//          return state;
//    }
// }
// export const addNewMessageActionCreator = (newMessageText) => {
//    return { 
//       type:'ADD-NEW-MESSAGE', 
//    newMessage: newMessageText
// }
// }
// export default messagePeageReduser;

const initialState = {
      dialogsData: [
         { id: 1, name: 'Alisa' },
         { id: 2, name: 'Lena' },
         { id: 3, name: 'Anastasia' },
         { id: 4, name: 'Marta' },
         { id: 5, name: 'Jroslav' }
      ],
      messagesData: [
         { id: 1, message: 'Hi' },
         { id: 2, message: 'How are you?' },
         { id: 3, message: 'Yo' },
         { id: 4, message: 'Yo' }
      ]
};

const messagePageReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD-NEW-MESSAGE':
         const newMessage = {
            id: state.messagesData.length + 1,
            message: action.newMessage
         };

         return {
            ...state,
           
               messagesData: [...state.messagesData, newMessage],
               
            
         };

      default:
         return state;
   }
};

export const addNewMessageActionCreator = (newMessageText) => {
   return {
      type: 'ADD-NEW-MESSAGE',
      newMessage: newMessageText
   };
};

export default messagePageReducer;
