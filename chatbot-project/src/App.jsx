import { useState, useEffect} from 'react'
import {Chatbot} from 'supersimpledev';
import { ChatInput } from './components/ChatInput'
import  ChatMessages  from './components/ChatMessages';

import './App.css'



function App (){

  const [chatMessages, setChatMessages] =  useState([
    {
      message: 'hello chatbot',
      sender: 'user',
      id: 'id1',
      time: 2345678
    },
    {
      message: 'hello How can i help?',
      sender: 'robot',
      id: 'id2',
      time: 2345678
    },
    {
      message: 'Can you get todays date?',
      sender: 'user',
      id: 'id3',
      time: 2345678
    },
    {
      message: 'Todays date is Feb 22',
      sender: 'robot',
      id: 'id4',
      time: 2345678
    },
]);
//const [chatMessages, setChatMessages] = array;
//const chatMessages = array[0];
// const setChatMessages = array[1];

useEffect(()=>{
  Chatbot.addResponses({
    'goodbye': 'goodbye. Have a great day!',
    'give me a unique id' : `Sure! Here's a unique iD: ${crypto.randomUUID()}`
  })
}, [])


  return(
    <div className='app-container'>
     
      <ChatMessages
        chatMessages = {chatMessages}
      />
      <ChatInput
        chatMessages = {chatMessages}
        setChatMessages ={setChatMessages}
      />  
     
    </div>
  );
}
 
 

export default App
