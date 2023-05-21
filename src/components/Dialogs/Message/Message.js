import c from './Message.module.css';

const Message = (props) => {
    return (
        <div className="messages">
            <div className="message">{props.message}</div>
        </div>
    );
};

export default Message;
