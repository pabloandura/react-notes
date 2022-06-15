import * as React from 'react';
import { NotesContext } from './NotesContextProvider';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';


function NoteDialog({ onClose, selectedValue, open, noteNum, setSelectedValue }) {

  const LIST = React.useContext(NotesContext)

  const deleteNote = (noteNum) => {
    let temp = LIST.noteList.filter((note, index) => {
      return (index !== noteNum)
    })
    LIST.setNoteList(temp)
  }

  const archiveNote = (noteNum) => {
    let selection = LIST.noteList.filter( (obj, index) => {
        return (noteNum === index) 
        }
    )
    selection[0].archived = !selection[0].archived
    let theRest = LIST.noteList.filter( (obj, index) => {
        return (noteNum !== index) 
        }
    )
    LIST.setNoteList([selection[0],...theRest])
    console.log(selection)
  }

  const handleClose = (value) => {
    onClose(value);
  };
  
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Note {noteNum} Actions</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem button onClick={(e) => {
            setSelectedValue('Delete');
            deleteNote(noteNum);
            onClose('Delete');
          }} >
            Delete
        </ListItem>
        <ListItem button onClick={(e) => {
            setSelectedValue('Archive');
            archiveNote(noteNum);
            onClose('Archive')
          }} >
            Archive
        </ListItem>
        
      </List>
    </Dialog>
  );
}

NoteDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function NoteDialogDemo({noteName, noteNum, noteText}) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('Other');


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue((value));
  };
    


  return (
    <div>
      <Button className='note-notename' variant="none" onClick={handleClickOpen}>
        {noteName}&emsp;Note #{noteNum}
      </Button>
      <NoteDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        noteNum={noteNum}
        setSelectedValue={setSelectedValue}
      />
      <div className='note-text_wrapper'>
        <p className='note-text'>
          {noteText}
        </p>
      </div>
    </div>
  );
}