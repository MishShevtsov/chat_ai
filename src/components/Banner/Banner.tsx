import React from 'react';
import { Grid, Text } from '@mantine/core';

import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <Text
          component='span'
          align='center'
          //   variant='gradient'
          //   gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
          size='xl'
          weight={700}
          style={{ fontFamily: 'Greycliff CF, sans-serif', fontSize: '50px' }}
        >
          Welcove to Intern AI
        </Text>
        <div>Learn, experiment and grow with your patient's data</div>
      </div>
      <div className={styles.banner__img}></div>
      {/* <Grid grow className={styles.grid} gutter='lg'>
        <Grid.Col span={4} className={styles.grid__item}>
          1
        </Grid.Col>
        <Grid.Col span={4} className={styles.grid__item}>
          2
        </Grid.Col>
        <Grid.Col span={3} className={styles.grid__item}>
          3
        </Grid.Col>
        <Grid.Col span={1} className={styles.grid__item}>
          4
        </Grid.Col>
      </Grid> */}
    </>
  );
};

export default Banner;
