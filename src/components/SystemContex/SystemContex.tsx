import React, { useRef } from 'react';
import { MessageInput } from '@chatscope/chat-ui-kit-react';

import styles from './SystemContex.module.scss';

type Context = {
  role: string;
  content: string;
};

interface SystemContexProps {
  handleContex: (contextText: string) => void;
  contextMessage: Context;
}

const SystemContex = ({ handleContex, contextMessage }: SystemContexProps) => {
  const inputRefContext = useRef() as React.MutableRefObject<any>;
  return (
    <div
      style={{
        marginTop: '20px',
      }}
    >
      <h3 style={{ width: 'fit-content' }}>System contex</h3>
      <MessageInput
        placeholder={contextMessage?.content}
        onChange={handleContex}
        attachButton={false}
        sendButton={false}
        ref={inputRefContext}
        className={styles.input}
      />
    </div>
  );
};

export default SystemContex;
