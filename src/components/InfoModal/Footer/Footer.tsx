import * as React from 'react';
import { Button } from '@mantine/core';

import styles from './InfloFooter.module.scss';

const InfloFooter = (props: { setIsModalOpen: any; isModalOpen: boolean }) => {
  // const { setIsModalOpen, isModalOpen } = props;

  return (
    <>
      <div className={`${styles.footer}`}>
        <Button
          className={`${styles.footer_button} ${styles.footer_button_publish_active}`}
          // onClick={setIsModalOpen(!isModalOpen)}
        >
          OK
        </Button>
        <Button
          className={`${styles.footer_button} ${styles.footer_button_close}`}
          onClick={() => {
            // setIsModalOpen(false);
          }}
        >
          Close
        </Button>
      </div>
    </>
  );
};

export default InfloFooter;
