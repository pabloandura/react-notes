import React from 'react';
import NoteDialog from './NoteDialog'
import { Grid } from '@mui/material'

const Note = ({noteNum, noteName, notes, setNotes}) => {
    /** Item list inside NoteContainer, you may delete or complete them. 
     * Once you complete a note you may also Archive it.*/
    
    function handleCheckboxClick() {   
        let selection = notes.filter( (obj) => {
            return (noteName === obj.name) 
            }
        )
        selection[0].completed = !selection[0].completed
        let theRest = notes.filter( (obj) => {
            return (noteName !== obj.name) 
            }
        )
        setNotes([selection[0],...theRest])
    }
    return(
            <Grid item xs={12} className='note-item'>
                <div className='note-checkbox' onClick={handleCheckboxClick}>
                    {
                    notes[noteNum-1].completed
                    ?
                    <p className='completed'><span aria-label='completed checkmark' role="img" >✔️</span></p>
                    :
                    <p className='incomplete'><span aria-label='incomplete cross' role="img" >❌</span></p>
                    }
                </div>
                <NoteDialog noteNum={noteNum} noteName={noteName}/>
            </Grid>            
    )
}

export default Note;