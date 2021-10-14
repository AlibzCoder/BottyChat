import { useContext } from "react";
import { ChatsContext } from "../utills";
import ChatInfo from "./ChatInfo";
import ChatInput from "./ChatInput";
import MessagesList from "./MessagesList";


const ChatLayout = () => {
    const { currentChat } = useContext(ChatsContext);

    if (!currentChat) return <div></div>

    return <div className="chat-layout">
        <ChatInfo />
        <MessagesList />
        <ChatInput />
    </div>
}
export default ChatLayout