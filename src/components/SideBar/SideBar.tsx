import React from 'react';
import { Button } from '@mantine/core';

import styles from './SideBar.module.scss';

interface SideBarProps {
  activeUser: string;
  setActiveUser: (user: string) => void;
}

const SideBar = ({ activeUser, setActiveUser }: SideBarProps) => {
  const users = [
    { id: 1, name: 'Jon Snow' },
    { id: 2, name: 'Eddard Stark' },
    { id: 3, name: 'Daenerys Targaryen' },
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
          <Button
            key={user.id}
            variant={`${activeUser === user.name ? 'outline' : 'gradient'}`}
            gradient={{ from: 'indigo', to: 'cyan' }}
            className={styles.sidebar__buttons_group__button}
            onClick={(e: any) => {
              setActiveUser(user.name);
            }}
          >
            {user.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
