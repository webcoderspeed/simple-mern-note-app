import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useFetch from './useFetch'


const NoteDetails = () => {

    const { id } = useParams();

    const { data: note, error, isPending } = useFetch(`/note/${id}`)

    console.log(note)

    const history = useHistory()

    const [isEditing, setIsEditing] = useState(false)


    // Handle Delete
    const handleDelete = () => {
        fetch(`/note/${id}`,{
            method:'DELETE'
        })
        .then(() => {
            history.push('/')
        })
    }

    // Handle Edit And Save
    let title =  document.querySelector('.note-title')
    let description =  document.querySelector('.note-description')


    const handleEdit = () => {
        title.contentEditable=true;
        description.contentEditable=true;
        setIsEditing(true)
    }

    const handleSave = () => {
        title.contentEditable=false;
        description.contentEditable=false;
        setIsEditing(false)
        
        const editednote = {...note,title: title.textContent, description:description.textContent} 
        console.log(editednote)

        fetch(`/note/${id}`,{
            method:'PUT',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(editednote)
        })
        .then(() => {
            history.push('/note/'+note._id)
        })
      
    }

    return (
        <div className='note-details'>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {note && (
                <article>
                    <h2 className='note-title'>{note.title}</h2>
                    <div className='note-description'>{note.description}</div>
                    <button onClick={handleDelete}>Delete note</button>
                    {!isEditing && <button
                    style={{
                        marginLeft:'25px'
                    }}
                    onClick={handleEdit}
                    >Edit note</button>}
                    {isEditing && <button onClick={handleSave}
                    style={{
                        marginLeft:'25px'
                    }}
                    >Save</button>}
                </article>
            )}
        </div>
    )
}

export default NoteDetails

