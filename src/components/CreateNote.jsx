import React, { useState } from 'react';

function CreateNote(props) {
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
     event.preventDefault();
  }

  return (
    <div>
    <div className="note">
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Create Note ..." rows="4" />
        <button onClick={submitNote} >Add</button>
      </form>
      </div>
    </div>
  );
}

export default CreateNote;
