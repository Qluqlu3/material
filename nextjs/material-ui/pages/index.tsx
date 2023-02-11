import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Home() {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    button: {
      margin: theme.spacing(1),
    },
  }));

  function SimpleForm() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
    };

    return (
      <form className={classes.container} onSubmit={handleSubmit}>
        <TextField label='Name' className={classes.textField} value={name} onChange={(e) => setName(e.target.value)} margin='normal' />
        <TextField label='Email' className={classes.textField} value={email} onChange={(e) => setEmail(e.target.value)} margin='normal' />
        <TextField label='Password' type='password' className={classes.textField} value={password} onChange={(e) => setPassword(e.target.value)} margin='normal' />
        <Button type='submit' variant='contained' color='primary' className={classes.button}>
          Submit
        </Button>
      </form>
    );
  }
}
