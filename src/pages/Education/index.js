import { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import CustomTable from '../../components/CustomTable';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Education.module.css';

const educationData = [
  { degree: 'BSc ARTIFICIAL INTELLIGENCE', institution: 'ITU', year: '2023-2027' },
  { degree: 'FSc', institution: 'FC COLLEGE', year: '2021-2023' },
];

export default function Education() {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Education');
  }, [setTitle]);

  return (
    <section className={`${styles.container} portfolio__education`}>
      <Typography variant="h4">Education</Typography>
      <CustomTable data={educationData} />
    </section>
  );
}