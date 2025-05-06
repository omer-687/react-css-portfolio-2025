import { useEffect } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import ProjectCard from '../../components/ProjectCard';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Projects.module.css';

const projects = [
    {
      title: 'Project 1',
      description: 'A web app built with React and MUI.',
      image: '/assets/images/project1.jpg', // Relative to public folder
    },
    {
      title: 'Project 2',
      description: 'A mobile game built using UNITY 3D.',
      image: '/assets/images/project2.jpg', // Relative to public folder
    },
  ];

export default function Projects() {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Projects');
  }, [setTitle]);

  return (
    <section className={`${styles.container} portfolio__projects`}>
      <Typography variant="h4">Projects</Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}