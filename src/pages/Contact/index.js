import { useEffect } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomInput from '../../components/CustomInput';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Contact.module.css';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

export default function Contact() {
  const { setTitle } = usePageTitle();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setTitle('Contact');
  }, [setTitle]);

  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <section className={`${styles.container} portfolio__contact`}>
      <Typography variant="h4">Contact Me</Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <CustomInput
          label="Name"
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <CustomInput
          label="Email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <CustomInput
          label="Message"
          multiline
          rows={4}
          {...register('message')}
          error={!!errors.message}
          helperText={errors.message?.message}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </section>
  );
}