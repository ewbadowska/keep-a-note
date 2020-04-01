import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles({
  root: {
    margin: '4ch',
    width: '40ch',
  },
  title: {
    marginBottom: 20,
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

function CreateNote(props) {
  const classes = useStyles();

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
    props.onSubmit(note);
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <form noValidate autoComplete="off">
          <TextField
            className={classes.title}
            id="standard-basic"
            label="Title"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
          <TextField
            className={classes.textarea}
            id="outlined-basic"
            multiline
            label="Create Note..."
            variant="outlined"
            name="content"
            onChange={handleChange}
            value={note.content}
          />
        </form>
      </CardContent>
      <CardActions>
        <Fab className={classes.button} onClick={submitNote}><AddIcon /></Fab>
      </CardActions>
    </Card>
  );
}

export default CreateNote;
