import React, { useEffect, useState } from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
import apiUrl from '../fetchurls'
import "../CSS/BodyColumn/BodyColumn.css"

function BodyColumn(props: any) {
    const [bodyValue, setBodyValue] = useState("")
    const [title, setTitle] = useState("")

    function handleChange(event: any) {
        setBodyValue(event.target.value)
    }

    useEffect(() => {
        const tempNoteID: number = props.selectedNoteID
        if (props.selectedNoteID != null) {
            fetch(`${apiUrl}/${tempNoteID}`)
            .then(data => data.json())
            .then(response => {
                const [newTitle, body] = [response.title, response.body]
                setBodyValue(body)
                setTitle(newTitle)
            })
        }
    }, [props.selectedNoteID])

    if (!!props.selectedNoteID) {
        // const { id, title, body } = props.selectedNote
        // setBodyValue(body)

        return (
            <div id="body-column">
                <h3>{title}</h3><hr/>
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