 const profilePageReducer = (state, action) => {
   switch (action.type) {
      case 'ADD-POST':
            let newPost = {
         id: state.postsData.length + 1,
         message: action.newPost,
         likesCount: 0
      };
      state.postsData.push(newPost);
      state.message = action.newPost;
      return state;
   
      default:
         return state;
   }
   

   
}
export const addPostActionGreator = (newPostText) => {
   return {
      type:'ADD-POST',
      newPost: newPostText
   }
}
export default profilePageReducer;