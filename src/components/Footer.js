import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
      backgroundColor:'black',
      color: 'white'
    },
});

function Footer() {
    const classes = useStyles();
    let fullYear = new Date().getFullYear();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Typography variant="overline" align="center">
                {fullYear}-{fullYear+1}, All Rights Reserved by K.Jeyashaalini
            </Typography>
        </AppBar>
    )
}

export default Footer
