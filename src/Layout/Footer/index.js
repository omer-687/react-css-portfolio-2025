import { Box, Typography } from '@mui/material';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className="portfolio__footer">
      <Box className={styles['portfolio__footer--container']}>
        <Typography variant="body2">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
}