import { Button, InputBase } from "@mui/material"
import IconButton from '@mui/material/IconButton';

import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { useContext, useRef, useState } from "react";
import { ChatsContext } from "../utills";

const ChatInput = () => {
    const fileInput = useRef(null)
    const [ message, setMessage ] = useState('');
    const { currentChat , addMessage } = useContext(ChatsContext);

    const onSubmit = e => {
        e.preventDefault()
        addMessage({
            text:message,
            self:true
        },currentChat.id)
        setMessage('')
    }

    return <form className="chat-input-box" onSubmit={onSubmit}>
        <InputBase 
            value={message}
            onChange={e => setMessage(e.target.value)}
            inputProps={{ placeholder: 'Write a message...' }}
            style={{flexGrow:1,width:'100%'}}
            />
        <div className="chat-input-tools">
            <input type="file" hidden ref={fileInput}/>
            <IconButton>
                <SentimentSatisfiedOutlinedIcon />
            </IconButton>
            <IconButton
                onClick={()=>{fileInput.current.click()}}>
                <AttachFileOutlinedIcon />
            </IconButton>
            <Button
                type="submit"
                variant={!message?"text":"contained"}
                disableElevation={true}
                disabled={!message} >Send</Button>
        </div>
    </form>
}
export default ChatInput