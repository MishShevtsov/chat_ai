import React from 'react';
import { Button, Avatar, Group, Text } from '@mantine/core';

import styles from './SideBar.module.scss';

type activeUserProps = {
  id: number;
  name: string;
  icon: string;
};

interface SideBarProps {
  activeUser: activeUserProps;
  setActiveUser: (user: activeUserProps) => void;
}

const SideBar = ({ activeUser, setActiveUser }: SideBarProps) => {
  const users = [
    { id: 1, name: 'Jon Snow', icon: 'jon_snow.png' },
    {
      id: 2,
      name: 'Eddard Stark',
      icon: 'eddard_stark.png',
    },
    {
      id: 3,
      name: 'Daenerys Targaryen',
      icon: 'daenerys_targaryen.png',
    },
    {
      id: 4,
      name: 'Drogo',
      icon: 'drogo.png',
    },
  ];

  return (
    <div className={styles.sidebar}>
      <img
        src='../public/icons/ai_icon.svg'
        alt='ai_icon'
        className={styles.sidebar__icon}
      />
      <div className={styles.sidebar__buttons_group}>
        {users.map((user) => (
          <div style={{ display: 'flex', width: '100%' }} key={user.id}>
            <Button
              key={user.id}
              variant={`${
                activeUser.name === user.name ? 'outline' : 'gradient'
              }`}
              gradient={{ from: 'indigo', to: 'cyan' }}
              className={styles.sidebar__buttons_group__button}
              onClick={(e: any) => {
                setActiveUser(user);
              }}
              leftIcon={
                <Avatar
                  src={`../../../public/avatars/${user.icon}`}
                  alt="it's me"
                  radius='xl'
                />
              }
              styles={(theme) => ({
                root: {
                  height: 42,
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                inner: {
                  justifyContent: 'left',
                },

                leftIcon: {
                  marginRight: 15,
                },
              })}
            >
              <Text>{user.name}</Text>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
