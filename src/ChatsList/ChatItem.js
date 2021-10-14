import { useContext } from "react";
import { ChatsContext, ShortenName } from "../utills";

const ChatItem = props => {

    const { name, lastTimeActive, lastMessage, isOnline, color , id } = props;
    const { currentChat, setCurrentChat , Messages , addMessage } = useContext(ChatsContext);


    const setchat = ()=>{
        if(!Messages[id]){
            addMessage({
                text:lastMessage,
                self:false
            },id)
        }
        setCurrentChat(props)
    }


    return <div className={`chat-item ${currentChat?.id===id ? 'chat-item-selected' : ''}`} 
        onClick={setchat}>
        <div className="avatar" style={{ backgroundColor: color }}>
            {ShortenName(name)}
        </div>
        <div className="chat-item-info">
            <h4>{name}</h4>
            <span>{lastMessage}</span>

            <span className={`chat-item-status ${isOnline ? 'chat-item-status-online' : ''}`}>
                {isOnline ? 'online' : lastTimeActive}
            </span>
        </div>

    </div>
}
export default ChatItem