import React from 'react';
import { Modal, Button, Group, Text, ScrollArea, Box } from '@mantine/core';

import styles from './InfoModal.module.scss';
import InfloFooter from './Footer/Footer';

interface InfoModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export const InfoModal = ({ isModalOpen, setIsModalOpen }: InfoModalProps) => {
  return (
    <div
      className={styles.modal}
      style={{ visibility: `${isModalOpen ? 'visible' : 'hidden'}` }}
    >
      <Text
        variant='gradient'
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
        ta='center'
        fz='xl'
        fw={700}
        style={{ padding: '10px', textAlign: 'left' }}
      >
        What can I ask?
      </Text>
      <section style={{ backgroundColor: '#E4ECF2', padding: '10px' }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
        <p>Praesent congue risus vel gravida viverra?</p>
        <p>
          What is the likelihood for deterioration in [No.] condition in
          [Duration]?
        </p>
        <p>
          Morbi fringilla molestie velit at egestas. Donec volutpat nunc sem,
          sed venenatis sem elementum?
        </p>
      </section>
      <ScrollArea
        type='hover'
        offsetScrollbars
        scrollbarSize={6}
        style={{ height: 400, padding: '10px' }}
      >
        <section>
          <p>
            Sed finibus faucibus lectus et condimentum. Curabitur molestie
            gravida nunc sed euismod?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
          <p>Praesent congue risus vel gravida viverra?</p>
          <p>
            Morbi fringilla molestie velit at egestas. Donec volutpat nunc sem,
            sed venenatis sem elementum vehicula?
          </p>
          <p>
            Sed finibus faucibus lectus et condimentum. Curabitur molestie
            gravida nunc sed euismod?
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
          <p>
            Phasellus vehicula, felis at congue aliquam, risus ipsum posuere
            neque, ut pretium nibh eros nec dui. Integer ornare accumsan nisl ut
            ullamcorper. Praesent turpis lectus, rutrum sed nisl vitae,
            fermentum pretium ex?
          </p>
          <p>
            Morbi fringilla molestie velit at egestas. Donec volutpat nunc sem,
            sed venenatis sem elementum vehicula?
          </p>
        </section>
      </ScrollArea>
      <InfloFooter setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  );
};
