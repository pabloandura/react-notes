import React from 'react';
import { useContext } from "react";
import { NotesContext } from "./NotesContextProvider";
import { ToastContainer } from 'react-toastify';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
        
    
    const LIST = useContext(NotesContext);

    const handleChange = (e) => {
        LIST.setViewStyle(e.target.value)
    }

    return(
        <div className="titulo">
            <button className='addNote'>Add a note!</button>
            Notes for Ensolvers
            <span className='subTitulo App-logo'>
                &emsp; made w/ React
            </span>
            <span className='note-count'>Note Count: {LIST.noteList.length}</span>
            <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Filtro</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={LIST.viewStyle}
                  onChange={handleChange}
                  label="Filtro"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'all'}>All Notes</MenuItem>
                  <MenuItem value={'archived'}>Archived Notes</MenuItem>
                  <MenuItem value={'active'}>Active Notes</MenuItem>
                </Select>
            </FormControl>
            <ToastContainer/>
        </div>                  

    )
}

export default Header;