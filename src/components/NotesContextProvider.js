import React from 'react';

import { createContext, useState } from "react";

export const NotesContext = createContext(); /* exportamos en el mismo archivo que el de la logica global */

const NotesContextProvider = ({children}) => {

    const temp = [
        {
            name:'Limpiar los platos',
            archived: false,
            key:0,
            text:'Every night',
        },
        {
            name:'Terminar action checkbox',
            archived: true,
            key:3,
            text:'Hicimos que funcione',
        },
        {
            name:'Darle de comer a Pocho y Bela',
            archived: true,
            key:4,
            text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            ima sunt esse temporibus sint culpa, recusandae aliquam numquam 
            totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
            quasi aliquam eligendi, placeat qui corporis!`,
            
        },
        {
            name:'Esforzarte en este SPA de notas',
            archived: true,
            key:1,
            text:`Curabitur lacus nulla, lacinia vel luctus eget, convallis id felis. Nunc sed orci ut mauris sollicitudin lobortis at non nisl. Pellentesque orci sem, tempus a consectetur ut, posuere et ipsum. Curabitur tincidunt pharetra est, vel congue ex sagittis sit amet. Vestibulum vel gravida magna. Pellentesque fermentum aliquam urna nec euismod. Cras fermentum, lectus sit amet congue auctor, mi nisi volutpat lorem, at dictum nisi justo nec nibh. Etiam diam elit, aliquet a tempor id, tincidunt sed augue. Maecenas vel congue dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
            
        },
        {
            name:'Estudiar que viene el parcial',
            archived: false,
            key:2,
            text:'Duis id pulvinar nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis eleifend nec mi euismod sagittis. Nam nunc sapien, posuere ac laoreet fringilla, tempus malesuada erat. Aliquam euismod faucibus est, vel ultrices sapien. Vestibulum eu tortor ut turpis viverra tristique. Sed tristique et eros sed auctor. Fusce vitae urna gravida, porttitor purus a, tristique ipsum. Quisque suscipit, tortor quis varius sollicitudin, est ante bibendum lectus, vel posuere quam nulla scelerisque erat. Donec maximus, massa eleifend eleifend lobortis, augue justo rutrum ipsum, sed accumsan arcu nisi id augue. Vestibulum et nunc porttitor, maximus dolor in, scelerisque purus. Integer eget libero nec metus pharetra egestas non a mauris. Suspendisse odio orci, tempus at placerat tristique, efficitur vel sapien. Praesent augue nisi, lobortis cursus scelerisque nec, pellentesque sed risus. Ut vel pellentesque nibh. Quisque viverra tortor metus, at tempor sapien scelerisque eget.',
            
        },

    ];
    const [noteList, setNoteList] = useState(temp);
    const [viewStyle, setViewStyle] = useState('all');
    return (
        <NotesContext.Provider value={
            {
                noteList,
                setNoteList,
                viewStyle,
                setViewStyle
            }
            }> {/* Cualquiera de estos children tendra acceso a 'value'*/}
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContextProvider;