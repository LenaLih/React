import React from 'react';
import s from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';


const Dialogs = (props) => {
  let newMessageElement = React.createRef();
  let addMessage = () => {
    let message = newMessageElement.current.value;
    alert(message);
  }

  let dialogsElement = props.state.dialogsData.map((d) => <DialogName name={d.name} id={d.id} />);

  
  let messagesElement = props.state.messagesData.map((m) => <Message message={m.message} />)
  return (
    <div className={s.dialogsItems}>
      <div className={s.dialogsItem}>
     
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElement}
        
        <textarea ref={ newMessageElement }></textarea>
        <div className= {s.button}>
        <button onClick={ addMessage }>Add post</button>
        </div>

      </div>
    </div>

  );
}


export default Dialogs;