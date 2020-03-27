import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateNote from './CreateNote';


function App() {
  return (
    <div>
      <Header />
      <CreateNote />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
