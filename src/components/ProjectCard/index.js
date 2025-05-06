import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description, image }) {
  return (
    <Card className={`${styles['portfolio__project-card--container']} portfolio__project-card`}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}