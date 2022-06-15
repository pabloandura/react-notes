import React from 'react';
import NoteDialog from './NoteDialog'
import { Grid } from '@mui/material'

const Note = ({noteNum, noteName, notes, setNotes, noteText}) => {
    /** Item list inside NoteContainer, you may delete or complete them. 
     * Once you complete a note you may also Archive it.*/
    
    function handleCheckboxClick() {   
        let selection = notes.filter( (obj) => {
            return (noteName === obj.name) 
            }
        )
        selection[0].archived = !selection[0].archived
        let theRest = notes.filter( (obj) => {
            return (noteName !== obj.name) 
            }
        )
        setNotes([selection[0],...theRest])
        console.log(selection)
    }
    return(
            <Grid item xs={12} className='note-item'>
                <div className='note-checkbox' onClick={handleCheckboxClick}>
                    {
                    notes[noteNum].archived
                    ?
                    <p className='archived'><span aria-label='filing cabinet' role="img" >🗄️</span></p>
                    :
                    <p className='active'><span aria-label='sun emoji' role="img" >🌞</span></p>
                    }
                </div>
                <NoteDialog noteNum={noteNum} noteName={noteName} noteText={noteText}/>
            </Grid>            
    )
}

export default Note;