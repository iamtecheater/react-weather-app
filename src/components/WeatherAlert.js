import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  

const WeatherAlert = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='sm'>
            <div className={classes.root}>
                <Alert severity="info">Please refresh the page to see if the weather has updated</Alert>
            </div>
        </Container>
    )
}

export default WeatherAlert;