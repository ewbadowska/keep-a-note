import React, { useState } from 'react';

function CreateNote() {
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


  return (
    <div>
    <div className="note">
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Create Note ..." rows="4" />
        <button>Add</button>
      </form>
      </div>
    </div>
  );
}

export default CreateNote;
