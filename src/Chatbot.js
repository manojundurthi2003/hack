import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="chatbot-toggle" onClick={toggleChatbot}>
        <button>{isOpen ? 'Close' : 'Chat'}</button>
      </div>
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-window">
            <div className="chat-messages">
              {/* Chatbot messages */}
            </div>
          </div>
          <div className="chatbot-input">
            <input type="text" placeholder="Type your question here..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
