import React from 'react';
import { Avatar, Text } from '@mantine/core';
import styles from './ChatHeader.module.scss';
interface activeUserProps {
  id: number;
  name: string;
  icon: string;
}
const ChatHeader = ({ activeUser }: any) => {
  return (
    <div className={styles.chat_header}>
      <Avatar
        src={`../../../public/avatars/${activeUser.icon}`}
        alt="it's me"
        radius='xl'
        className={styles.chat_header__avatar}
      />
      <Text
        component='span'
        align='center'
        variant='gradient'
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        size='xl'
        weight={700}
        style={{ fontFamily: 'Greycliff CF, sans-serif' }}
      >
        {activeUser.name}
      </Text>
    </div>
  );
};

export default ChatHeader;
