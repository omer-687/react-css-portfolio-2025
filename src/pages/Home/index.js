import { useEffect } from 'react';
import { Typography, Box, Avatar } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Home.module.css';

export default function Home() {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Home');
  }, [setTitle]);

  return (
    <section className={`${styles.container} portfolio__home`}>
      <Box className={styles['portfolio__home--content']}>
        <Typography variant="h4">Welcome to My Portfolio</Typography>
        <Avatar
          alt="Profile"
          src="/assets/images/mainpage.jpg"
          className={styles['portfolio__home--avatar']}
          sx={{ width: 120, height: 120, mt: 2 }}
        />
        <Typography variant="body1" sx={{ mt: 2 }}>
          I am a fourth semester student at ITU doing Bachelor's in ARTIFICIAL INTELLIGENCE.
        </Typography>
      </Box>
    </section>
  );
}