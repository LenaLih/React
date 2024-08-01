// import React from 'react';
// import s from './Dialogs.module.css';
// import DialogName from './DialogName/DialogName';
// import Message from './Message/Message';
// import { useState } from 'react';
// import { addNewMessageActionCreator } from '../../Redux/messagePage-reducer';


// const Dialogs = (props) => {
//   console.log(dialogsData);
//   console.log(messagesData);
//   let [newMessageText, setNewMessageText] = useState('')
//    let addMessage = () => {
  
//     if (newMessageText.trim() !== '') {
//       props.dispatch(addNewMessageActionCreator(newMessageText));
//       setNewMessageText('')
//     };
    

//   };

//   let dialogsElement = (props.state.dialogsData).map((d) => <DialogName name={d.name} id={d.id} />);

  
//   let messagesElement = (props.state.messagesData).map((m) => <Message message={m.message} />)

  
//   return (
//     <div className={s.dialogsItems}>
//       <div className={s.dialogsItem}>
     
//         {dialogsElement}
//       </div>
//       <div className={s.messages}>
//         {messagesElement}
        
//         <textarea value={newMessageText} onChange={(e) => setNewMessageText(e.target.value)} />
//         <div className= {s.button}>
//         <button onClick={ addMessage }>Add post</button>
//         </div>
        
//       </div>
//     </div> 
// );
// }


// export default Dialogs;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';
import { addNewMessageActionCreator } from '../../Redux/messagePage-reducer';

const Dialogs = () => {
 
  const [newMessageText, setNewMessageText] = useState('');
  const dialogsData = useSelector(state => state.messagePage.dialogsData);
 
  const messagesData = useSelector(state => state.messagePage.messagesData);
  
  const dispatch = useDispatch();

  const addMessage = () => {
    if (newMessageText.trim() !== '') {
      dispatch(addNewMessageActionCreator(newMessageText));
      setNewMessageText('');
    }
  };

  const dialogsElement = dialogsData.map(d => <DialogName key={d.id} name={d.name} id={d.id} />);
  const messagesElement = messagesData.map(m => <Message key={m.id} message={m.message} />);

  return (
    <div className={s.dialogsItems}>
      <div className={s.dialogsItem}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElement}
        <textarea
          value={newMessageText}
          onChange={(e) => setNewMessageText(e.target.value)}
        />
        <div className={s.button}>
          <button onClick={addMessage}>Add post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
