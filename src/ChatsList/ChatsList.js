import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatItem from './ChatItem';
import { chatsList } from '../data'

const ChatsList = () => {
    return <div className="chats-list">
        <div className="chats-list-top">
            <div className="chats-filter">All Messages <KeyboardArrowDownIcon /></div>
            <SettingsIcon className="chats-settigns" />
        </div>
        <div className="list">
            {
                chatsList.map(chat => <ChatItem {...chat} />)
            }
        </div>
    </div>
}

export default ChatsList;