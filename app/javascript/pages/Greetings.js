import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../redux/messages/messagesSlice';
import Greeting from '../components/Greeting';
import './Greetings.css';

export default function Greetings() {
  const dispatch = useDispatch();

  // Access the 'messageList' and 'status' properties from the Redux store
  const { messageList, status } = useSelector((store) => store.message);

  useEffect(() => {
    // Check the status from the Redux store
    if (status === 'idle') {
      dispatch(fetchMessages());
    }
  }, [status, dispatch]);

  const myMessages = [];

  for (let i = 0; i < messageList.length; i += 1) {
    const str = `message${i}`;
    myMessages.push(<Greeting
      key={str}
      id={messageList[i].id}
      name={messageList[i].name}
      imageUrl={messageList[i].imageUrl}
      description={messageList[i].description}
      webLink={messageList[i].webLink}
      price={messageList[i].price}
    />);
  }

  return (
    <div className="container">
      {myMessages}
    </div>
  );
}
