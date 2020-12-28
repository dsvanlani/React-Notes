import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import apiUrl from '../fetchurls'

function BodyColumnHeader(props: any) {
    const { title, selectedNoteID, bodyValue } = props

    const handleSave = () => {
        fetch(`${apiUrl}/${selectedNoteID}/`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                body: bodyValue,
            })
        })
        .then(data => data.json())
        .then(response => console.log(response))
    }

    return (
        <Row>
            <Col>
                <h3>{title}</h3>
            </Col>
            <Col xs={2} className="float-right">
                <Button onClick={handleSave}>Save</Button>
            </Col>
        </Row>
    )
}

export default BodyColumnHeader