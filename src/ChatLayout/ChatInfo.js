import { useContext } from "react";
import { ChatsContext, ShortenName } from "../utills";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


const ChatInfo = () => {

    const { currentChat } = useContext(ChatsContext);

    return <div className="chat-info">
        <div className="chat-user-info">
            <div className="avatar" style={{ backgroundColor: currentChat.color }}>
                {ShortenName(currentChat.name)}
            </div>
            <div className="chat-item-info">
                <h2 className={currentChat.isOnline ? `is-online-circle` : ''}>{currentChat.name}</h2>
                <span>Cloud, The Internet</span>
            </div>
        </div>
        <div className="chat-info-last-active">
            <div className="last-seen">
                <RemoveRedEyeOutlinedIcon />
                <h4>botty-beep-boop</h4>
            </div>
            <div className="last-active-time">
                <AccessTimeIcon />
                <h4>5m</h4>
            </div>
        </div>
    </div>
}

export default ChatInfo