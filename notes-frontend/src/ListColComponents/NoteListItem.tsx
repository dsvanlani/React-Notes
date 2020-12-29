import React from 'react'
import { Row, Col } from 'reactstrap'

function NoteListItem(props: any) {
    const {data, setSelectedNoteID} = props

    const handleClick = () => {
        setSelectedNoteID(data.id)
    }

    return (
        <Row>
            <Col className="text-nowrap">
                <button 
                className="note-list-item"
                onClick={handleClick}>
                    {data.title}
                </button>
            </Col>
        </Row>
    )
}

export default NoteListItem