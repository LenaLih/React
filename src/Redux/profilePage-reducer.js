const initialState = {
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
      }
   ]

};

const profilePageReducer = (state = initialState, action) => {

   switch (action.type) {
      case 'ADD-POST':

         const newPost = {
            id: state.postsData.length + 1,
            message: action.newPost,
            likesCount: 0
         };
         // Создаем новый объект состояния с изменениями
         return {
            ...state,
            postsData: [...state.postsData, newPost]

         };

      default:
         return state;
   }
}

export const addPostActionCreator = (newPostText) => {
   return {
      type: 'ADD-POST',
      newPost: newPostText
   };
}

export default profilePageReducer;
