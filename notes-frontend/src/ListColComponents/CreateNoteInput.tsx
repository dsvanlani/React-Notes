import React, { useEffect, useState } from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
import apiUrl from '../fetchurls'

function CreateNoteInput(props: any) {
    const { setSelectedNoteID, setCreateNote, setNotes } = props
    const [inputValue, setInputValue] = useState("")
    const [noteCreated, setNoteCreated] = useState(false)

    const handleChange = (event: any) => {
        setInputValue(event.target.value)
    }

    const handleEnter = (event: any) => {
        if (event.keyCode === 13) {
            event.preventDefault()
            
            const noteData = {
                title: inputValue
            }

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(noteData)
            })
            .then(data => data.json())
            .then(response => {
                setNoteCreated(!noteCreated)
                setSelectedNoteID(response.id)
                setCreateNote(false)
            })
        }

        if (event.keyCode === 27) {
            setCreateNote(false)
        }
    }

    useEffect(() => {
        fetch(apiUrl)
        .then(data => data.json())
        .then(response => setNotes(response))
    }, [noteCreated])

    return (
        <Form>
            <FormGroup>
                <Input 
                type="text" 
                placeholder="New note..." 
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleEnter}></Input>
            </FormGroup>
        </Form>
    )
}

export default CreateNoteInput