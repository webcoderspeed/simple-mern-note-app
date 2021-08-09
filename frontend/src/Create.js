import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const note = {title, description}

        setIsPending(true)
        
        fetch(`/note`,{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(note)
        })
        .then(() => {
            console.log('New Blog Added!')
            setIsPending(false)
            history.push('/')
        })

    }

    return (
        <div className='create'>
            <h2>Add a New Note</h2>
            <form onSubmit={handleSubmit}>
                <label>Note title: </label>
                <input type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Note body: </label>
                <textarea required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                {!isPending && <button>Add Note</button>}
                {isPending && <button disabled>Adding Note...</button>}
            </form>
        </div>
    )
}

export default Create


