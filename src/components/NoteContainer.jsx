import React from 'react';
import { Grid } from "@mui/material";
import { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "./NotesContextProvider";

const NoteContainer = () => {
    
    // accedemos al context
    const LIST = useContext(NotesContext);

    return(
        <>
        <Grid item xs={2}/>
        <Grid item xs={8}>
            <Grid container className='note-container'>
            {
            LIST.noteList.map( (note, index) => {
                return(
                    <div className='note-wrapper' key={`${note.key}NOTA`}>
                        <Note 
                            noteName={note.name} 
                            noteNum={index}
                            noteArchived={note.archived} 
                            setNotes={LIST.setNoteList}
                            notes={LIST.noteList}
                            noteText={note.text}
                            />
                    </div>
                )
            })
            }
            </Grid>
        </Grid>
        </>
    )
}

export default NoteContainer;