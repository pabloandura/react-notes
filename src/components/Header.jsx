import React from 'react';
import { useContext } from "react";
import { NotesContext } from "./NotesContextProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    
    
    const LIST = useContext(NotesContext);



    return(
        <div className="titulo">
            Notes for Ensolvers
            <span className='subTitulo App-logo'>
                &emsp; made w/ React
            </span>
            <span className='note-count'>Note Count: {LIST.noteList.length}</span>
            <ToastContainer/>
        </div>                  

    )
}

export default Header;