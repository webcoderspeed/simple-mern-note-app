import React from 'react'
import { Link } from 'react-router-dom'

const NoteList = ({notes, title}) => {
    return (
        <>
        {
            notes?.length ? (
                <div className='note-list'>
                    <h2>{title}</h2>
                    {notes.map(note => (
                        <div className="note-preview" key={note._id}>
                        <Link to={`/note/${note._id}`}>
                            <h2>{note.title}</h2>
                            <p>{note.description.substring(0,70)+'...'}</p>
                        </Link>
                        </div>
                    ))}
                </div>
            ) : <h1>You don't have any notes</h1>
        }
        </>
    )
}

export default NoteList
