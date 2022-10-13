import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import { FiSend } from 'react-icons/fi';
import Button from "react-bootstrap/Button";
//import EmojiPicker from 'emoji-picker-react';

const chatData = [
    {
        'user_id': 1,
        'message': 'Hi',
    },
    {
        'user_id': 2,
        'message': 'Hello',
    },
    {
        'user_id': 1,
        'message': 'How Are you?',
    }, {
        'user_id': 2,
        'message': 'I am Good !!',
    }, {
        'user_id': 2,
        'message': 'Thanks for asking',
    }
];


const ChatPage = () => {
    const [message, setMessage] = useState('');
    const [messageData, setMessageData] = useState(chatData);

    const handleMessageChange = (event) => {
        var message = event.target.value;
        setMessage(message);
    }
    const handleMessageSend = () => {

        messageData.push({ 'user_id': 1, 'message': message });
        setMessage("");
        setMessageData(messageData);
    }
    return (
        <div className='i-box p-rel'>
            <h3 className='text-success'>Chat Page </h3>
            <div className='message-box'>
                <div className="row">
                    {messageData.map((row, index) => {
                        if (row.user_id === 1) {
                            return <div className="col-12"><p className="text-bright alert-success box-right">{row.message}</p></div>
                        } else {
                            return <div className="col-12"><p className="text-success alert-warning box-left">{row.message}</p></div>
                        }
                    })}
                </div>
            </div>

            <div className='chat-box col-12'>
                <div className='row'>
                    <Form.Control type="text" className='col-md-10'
                        id="message" name="message" value={message}
                        onChange={handleMessageChange}
                        placeholder="Type start.....">
                    </Form.Control>
                    {/*<EmojiPicker />*/}
                    <Button className='col-md-2 btn-success' onClick={handleMessageSend}><FiSend /></Button>
                </div>
            </div>
        </div >
    )
}
export default ChatPage;