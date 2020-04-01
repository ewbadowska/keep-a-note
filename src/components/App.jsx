import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import CreateNote from './CreateNote';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((noteItem, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateNote
        onSubmit={addNote}
      />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default App;
