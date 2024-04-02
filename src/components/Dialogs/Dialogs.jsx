import React from 'react';
import s from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';



const Dialogs = (props) => {


  let dialogsElement = props.dialogsData.map((d) => <DialogName name={d.name} id={d.id} />);

  
  let messagesElement = props.messagesData.map((m) => <Message message={m.message} />)
  return (
    <div className={s.dialogsItems}>
      <div className={s.dialogsItem}>
     
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElement}

      </div>
    </div>

  );
}


export default Dialogs;