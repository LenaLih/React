

const messagePeageReduser = (state, action) => {
   switch (action.type) {
      case 'ADD-NEW-MESSAGE':
         let newMessage = {
            id: state.messagesData.length + 1,
            message: action.newMessage
         };
         
         state.message = action.newMessage;
         state.messagesData.push(newMessage); 
         return state;
   
      default:
         return state;
   }
}
export const addNewMessageActionCreator = (newMessageText) => {
   return { 
      type:'ADD-NEW-MESSAGE', 
   newMessage: newMessageText
}
}
export default messagePeageReduser;