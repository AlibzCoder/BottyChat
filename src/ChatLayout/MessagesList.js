import { useContext } from "react";
import { ChatsContext } from "../utills";


const Message = ({text,self})=><div className={`message-box ${self?'message-self':''}`}>
    <div className="message">
        {text}
    </div>
</div>

const MessagesList = ()=>{
    const { currentChat , Messages } = useContext(ChatsContext);

    return <div className="messages-list">
        {Messages[currentChat.id].map(message=><Message {...message}/>)}
    </div>
}
export default MessagesList;