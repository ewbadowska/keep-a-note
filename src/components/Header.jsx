import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    backgroundColor: '#679b9b',
    textAlign: 'center',
    padding: '16px 32px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
  },
});

function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Typography variant="h4" className={classes.title}>
          Keep-A-Note
        </Typography>
      </AppBar>
    </div>
  );
}

export default Header;
