import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles({
  root: {
    float: 'left',
  },
  card: {
    margin: '4ch',
  },
  title: {
    width: '35ch',
  },
  textarea: {
    width: '30ch',
  },
  button: {
    background: '#679b9b',
    margin: 'auto',
  },
});

function Note(props) {
  const classes = useStyles();

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" className={classes.title}>
            {props.title}
          </Typography>
          <Typography multiline className={classes.textarea}>
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Fab className={classes.button} onClick={handleClick}>
            <ClearIcon />
          </Fab>
        </CardActions>
      </Card>
    </div>
  );
}

export default Note;
