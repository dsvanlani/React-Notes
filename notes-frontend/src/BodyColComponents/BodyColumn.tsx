import React, { useEffect, useState } from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
import BodyColumnHeader from './BodyColumnHeader'
import apiUrl from '../fetchurls'
import "../CSS/BodyColumn/BodyColumn.css"

function BodyColumn(props: any) {
    const [bodyValue, setBodyValue] = useState("")
    const [title, setTitle] = useState("")

    const {selectedNoteID} = props

    function handleChange(event: any) {
        setBodyValue(event.target.value)
    }

    useEffect(() => {
        const tempNoteID: number = props.selectedNoteID
        if (props.selectedNoteID != null) {
            fetch(`${apiUrl}/${tempNoteID}/`)
            .then(data => data.json())
            .then(response => {
                const [newTitle, body] = [response.title, response.body]
                setBodyValue(body)
                setTitle(newTitle)
            })
        }
    }, [selectedNoteID])

    if (!!selectedNoteID) {
        // const { id, title, body } = props.selectedNote
        // setBodyValue(body)

        return (
            <div id="body-column">
                <BodyColumnHeader 
                title={title} 
                selectedNoteID={selectedNoteID}
                bodyValue={bodyValue}/>
                <Form>
                    <FormGroup>
                        <Input id="textarea" type="textarea" value={bodyValue} onChange={handleChange}></Input>
                    </FormGroup>
                </Form>
            </div>
        )
    } else {
        return <h3>None Selected</h3>
    }

}

export default BodyColumn