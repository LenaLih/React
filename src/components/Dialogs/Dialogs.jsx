import React from 'react';
import s from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';
import { useState } from 'react';
import { addNewMessageActionCreator } from '../../Redux/state';


const Dialogs = (props) => {

  let [newMessageText, setNewMessageText] = useState('')
   let addMessage = () => {
  
    if (newMessageText.trim() !== '') {
      props.dispatch(addNewMessageActionCreator(newMessageText));
      setNewMessageText('')
    };
    

  };

  let dialogsElement = props.state.dialogsData.map((d) => <DialogName name={d.name} id={d.id} />);

  
  let messagesElement = props.state.messagesData.map((m) => <Message message={m.message} />)
  return (
    <div className={s.dialogsItems}>
      <div className={s.dialogsItem}>
     
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElement}
        
        <textarea value={newMessageText} onChange={(e) => setNewMessageText(e.target.value)} />
        <div className= {s.button}>
        <button onClick={ addMessage }>Add post</button>
        </div>
         ghhjkkbnmnкттьолл
      </div>
    </div> 
);
}


export default Dialogs;