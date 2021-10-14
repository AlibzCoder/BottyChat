import { useContext, useState } from "react";
import { ChatsContext, ShortenName } from "./utills";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const ChatData = ()=>{
    const { currentChat } = useContext(ChatsContext);

    const [open,setOpen] = useState(false)

    const toggle = ()=>{
        setOpen(!open)
    }



    if (!currentChat) return <div></div>

    return <div className={`chat-data ${!open?'chat-data-close':''}`}>
        <div className="chat-data-top"
            style={{backgroundColor:currentChat.color}}
            onClick={toggle}>

            <div className="chat-data-arrow"><KeyboardArrowLeftIcon/></div>

            <div className="avatar">
                {ShortenName(currentChat.name)}
            </div>

            <h1>
                {currentChat.name}
            </h1>
        </div>
        <div className="chat-data-list">
            <h3>EMAIL</h3>
            <p>{currentChat.email}</p>

            <h3>PHONE</h3>
            <p>{currentChat.phone}</p>

            <h3>LABELS</h3>
            <div className="chat-data-lables">
                <div className="chat-data-lable">
                    Bot <CloseOutlinedIcon fontSize="small"/>
                </div>
                <div className="chat-data-lable">
                    React <CloseOutlinedIcon fontSize="small"/>
                </div>
            </div>

            <h3>ATTACHMENTS</h3>
            <div className="chat-data-attachments">
                <div className="chat-data-attachment">
                    <AttachFileOutlinedIcon/> Dataset.csv 
                </div>
                <div className="chat-data-attachment">
                    <PanoramaOutlinedIcon/> bot_face.jpg 
                </div>

                <a href="/">View All</a>
            </div>
        </div>

        <Button variant="contained" disableElevation={true}
            className="edit-contact-btn">
            Edit Contact
        </Button>

    </div>
}

export default ChatData;