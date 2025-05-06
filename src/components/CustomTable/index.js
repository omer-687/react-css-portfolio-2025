import { Table, TableHead, TableCell, TableRow, TableBody } from '@mui/material';
import styles from './CustomTable.module.css';

export default function CustomTable({ data }) {
  return (
    <Table className={`${styles['portfolio__education-table--container']} portfolio__education-table`}>
      <TableHead>
        <TableRow>
          <TableCell>Degree</TableCell>
          <TableCell>Institution</TableCell>
          <TableCell>Year</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index} className={index % 2 === 0 ? styles['portfolio__education-table--row--striped'] : ''}>
            <TableCell>{item.degree}</TableCell>
            <TableCell>{item.institution}</TableCell>
            <TableCell>{item.year}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}