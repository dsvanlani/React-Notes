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
            <Col xs="10" className="text-center">
                <h5>{title}</h5>
            </Col>
            <Col>
                <Button className="float-right" size="sm" onClick={handleSave}>Save</Button>
            </Col>
        </Row>
    )
}

export default BodyColumnHeader