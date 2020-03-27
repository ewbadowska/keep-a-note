import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateNote from './CreateNote';


function App() {
  const [ notes, setNotes ] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateNote
        onSubmit={addNote}
      />
      {notes.map((noteItem) => (
        <Note
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
