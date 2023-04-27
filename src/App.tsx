import { useState, useRef, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  InputToolbox,
  MessageSeparator,
  Button,
  ConversationHeader,
  Avatar,
} from '@chatscope/chat-ui-kit-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRotateLeft,
  faUserTie,
  faTicket,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { Button as MantinButton } from '@mantine/core';
import { InfoModal } from './components/InfoModal/InfoModal';
import { getCurrentDateFormatted } from './helpers/dateFormatter';
import SystemContex from './components/SystemContex/SystemContex';
import SideBar from './components/SideBar/SideBar';
import Background from './components/Background/Background';

import styles from './App.module.scss';

const API_KEY = 'YOUR API KEY SHOULD BE HERE';

const systemMessage = {
  role: 'system',
  content:
    'Explain as if you were talking to a child who does not understand medicine. And you are the doctor.',
};

const defaultMessage = {
  message: "Hello, I'm SCRUB CHART.AI! Ask me anything!",
  sentTime: 'just now',
  sender: 'SCRUB CHART.AI',
};

function App() {
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([defaultMessage]);
  const [contextMessage, setContextMessage] = useState(systemMessage);
  const [activeUser, setActiveUser] = useState('Jon Snow');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const inputRef = useRef() as React.MutableRefObject<any>;
  const lastMessageRef = useRef<any>();

  useEffect(() => {
    if (lastMessageRef && lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async (message: any) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: activeUser,
    };

    const newMessages = [...messages, newMessage];
    //@ts-ignore
    setMessages(newMessages);

    setIsTyping(true);

    await processMessageToChatGPT(newMessages);
  };

  const currentDate = new Date();

  const currentDateFormatted = getCurrentDateFormatted(currentDate);

  const handleContex = (contextText: string) => {
    const newContext = {
      role: 'system',
      content: contextText,
    };
    setContextMessage(newContext);
  };

  async function processMessageToChatGPT(chatMessages: any) {
    let apiMessages = chatMessages.map((messageObject: any) => {
      let role = '';
      if (messageObject.sender === 'SCRUB CHART.AI') {
        role = 'assistant';
      } else {
        role = 'user';
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [contextMessage, ...apiMessages],
    };

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: 'SCRUB CHART.AI',
          },
        ]);
        setIsTyping(false);
      });
  }

  const handleReset = () => {
    setContextMessage(systemMessage);
    setMessages([defaultMessage]);
  };

  const messageTitle = (sender: string) => {
    if (sender === 'SCRUB CHART.AI') {
      return (
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <img src='../public/icons/heart_rate.svg' alt='' />
          <img src='../public/icons/scrub_chart.svg' alt='' />
        </div>
      );
    }
    return <div style={{ fontWeight: 'bold', display: 'flex' }}>{sender}</div>;
  };

  return (
    <div className={styles.App}>
      <Background />
      <div style={{ display: 'flex' }}>
        <SideBar activeUser={activeUser} setActiveUser={setActiveUser} />

        <div style={{ position: 'relative', height: '600px', width: '700px' }}>
          <MainContainer style={{ borderRadius: '15px' }}>
            <ChatContainer>
              <ConversationHeader style={{ backgroundColor: '#D8E0EA' }}>
                <Avatar src='../public/icons/avatar.svg' name={activeUser} />
                <ConversationHeader.Content
                  style={{ textAlign: 'left', backgroundColor: '#D8E0EA' }}
                  userName={activeUser}
                />
              </ConversationHeader>
              <MessageList
                scrollBehavior='auto'
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator content='SCRUB CHART.AI is typing' />
                  ) : null
                }
              >
                <MessageSeparator content={currentDateFormatted} />
                {messages.map((message: any, i: number) => {
                  return (
                    <Message key={i} model={message}>
                      <Message.CustomContent>
                        {messageTitle(message.sender)}
                        <div
                          style={{
                            textAlign: 'left',
                          }}
                        >
                          {message.message}
                        </div>
                        {message.sender === 'SCRUB CHART.AI' ? (
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'flex-start',
                              marginLeft: '-13px',
                            }}
                          >
                            <Button
                              icon={
                                <img
                                  className={styles.copy_icon}
                                  src='../public/icons/copy.svg'
                                  alt=''
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      message.message
                                    );
                                  }}
                                />
                              }
                            ></Button>
                          </div>
                        ) : null}
                      </Message.CustomContent>
                    </Message>
                  );
                })}
              </MessageList>
              <InputToolbox
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'left',
                }}
              >
                <div style={{ textAlign: 'left', padding: '5px' }}>
                  What's on your mind?
                </div>
                <MessageInput
                  id='message'
                  placeholder='Type message here'
                  onSend={handleSend}
                  attachButton={false}
                  ref={inputRef}
                  style={{ width: '100%', padding: '10px' }}
                />
              </InputToolbox>
            </ChatContainer>
          </MainContainer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginTop: '20px',
            }}
          >
            <button
              className={styles.question_button}
              onClick={(e: any) => setIsModalOpen(!isModalOpen)}
            >
              <FontAwesomeIcon icon={faQuestion} style={{ color: '#1970B9' }} />
            </button>
            <MantinButton
              radius='xl'
              variant='outline'
              style={{ borderWidth: '3px' }}
              leftIcon={<FontAwesomeIcon icon={faArrowRotateLeft} />}
              onClick={handleReset}
            >
              Reset AI
            </MantinButton>
          </div>
          <SystemContex
            handleContex={handleContex}
            contextMessage={contextMessage}
          />
        </div>
        <InfoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
}

export default App;
