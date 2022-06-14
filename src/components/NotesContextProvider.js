import React from 'react';

import { createContext, useState } from "react";

export const NotesContext = createContext(); /* exportamos en el mismo archivo que el de la logica global */

const NotesContextProvider = ({children}) => {

    const temp = [
        {
            name:'Limpiar los platos',
            completed: false,
            key:0,
            
        },
        {
            name:'Darle de comer a Pocho y Bela',
            completed: true,
            key:1,
            
        },
        {
            name:'Esforzarte en este SPA de notas',
            completed: true,
            key:2,
            
        },
        {
            name:'Estudiar que viene el parcial',
            completed: false,
            key:3,
            
        },
        {
            name:'Terminar action checkbox',
            completed: false,
            key:4
        }
    ];
    const [noteList, setNoteList] = useState(temp);

    return (
        <NotesContext.Provider value={
            {
                noteList,
                setNoteList
            }
            }> {/* Cualquiera de estos children tendra acceso a 'value'*/}
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContextProvider;