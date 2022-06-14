import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';


const emails = ['Archive', 'Dinasour'];

function NoteDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Note Actions</DialogTitle>
      <List sx={{ pt: 0 }}>
        {
        emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            {email}
          </ListItem>
          )
        )
        }

        <ListItem autoFocus button onClick={() => handleListItemClick('del')}>
            Delete
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

export default function NoteDialogDemo({noteName, noteNum}) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
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
      />
    </div>
  );
}