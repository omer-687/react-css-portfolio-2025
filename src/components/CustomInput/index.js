import { TextField } from '@mui/material';
import styles from './CustomInput.module.css';

export default function CustomInput({ label, error, helperText, ...props }) {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      className={styles['portfolio__custom-input--field']}
      error={error}
      helperText={helperText}
      {...props}
    />
  );
}