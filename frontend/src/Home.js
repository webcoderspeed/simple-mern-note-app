import React from 'react'
import useFetch from './useFetch'
import NoteList from './NoteList'

const Home = () => {

    const { data: notes, isPending, error } = useFetch(`/note`) 

    return (
        <div className='home'>
            {error && <div>{error.message}</div>}
            { isPending && <div>Loading Notes...</div>}
            {notes && <NoteList notes={notes} title='All Notes' />}
        </div>
    )
}

export default Home
