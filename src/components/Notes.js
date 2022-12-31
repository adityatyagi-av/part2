import React from 'react'

const Note =({note})=>{
    return(
        <li>{note.content}</li>
    )
}

export default function Notes(props) {
    const notes = props.notes
  return (
    <div>
        <h1>Notes</h1>
        <ul>
            {notes.map(note =>
            { return(
                <Note key={note.id} note={note}/>
            )})
            }
        </ul>
    </div>
  )
}
