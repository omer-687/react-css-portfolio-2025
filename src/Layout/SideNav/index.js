import { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Box, Typography, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import styles from './SideNav.module.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Education', path: '/education' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function SideNav() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerContent = (
    <Box className={styles['portfolio__sidenav--container']}>
      <Box className={styles['portfolio__sidenav--profile']}>
        <Avatar
          alt="Profile"
          src="/assets/images/profile.jpg"
          sx={{ width: 80, height: 80, mb: 2 }}
        />
        <Typography variant="h6">OMER FAROOQ</Typography>
        <Typography variant="body2">STUDENT</Typography>
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem button key={link.name} component={Link} to={link.path} onClick={isMobile ? toggleDrawer : undefined}>
            <ListItemText primary={link.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav className="portfolio__sidenav">
      {isMobile ? (
        <>
          <IconButton onClick={toggleDrawer} sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={toggleDrawer}>
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <Drawer variant="permanent" className={styles['portfolio__sidenav--drawer']}>
          {drawerContent}
        </Drawer>
      )}
    </nav>
  );
}