import React, { useState } from "react";
import ChatData from "./ChatData";
import ChatLayout from "./ChatLayout";
import ChatsList from "./ChatsList/ChatsList";
import { ChatsContext } from "./utills";



const App = () => {
    const [currentChat, setCurrentChat] = useState(null);
    const [Messages,setMessages] = useState({});

    const addMessage = (message,chatId)=>{
        let m_temp = {...Messages};
        if(!m_temp[chatId]) m_temp[chatId] = [];
        m_temp[chatId].push(message);
        setMessages(m_temp)
    }


    return <ChatsContext.Provider value={{ currentChat, setCurrentChat , Messages , addMessage}}>
        <div className="app">
            <ChatsList />
            <ChatLayout />
            <ChatData />
        </div>
    </ChatsContext.Provider>
}

export default App;