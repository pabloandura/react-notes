import React from 'react';
import './App.css';
import Header from './components/Header';
import NoteContainer from './components/NoteContainer';
import NotesContextProvider from './components/NotesContextProvider';
import { Grid } from '@mui/material';

function App() {  
  return (
    <NotesContextProvider>
      <div className="App">
        <Header/>
        <Grid container spacing={20}>
          <NoteContainer />
        </Grid>
      </div>
    </NotesContextProvider>

  );
}

export default App;
