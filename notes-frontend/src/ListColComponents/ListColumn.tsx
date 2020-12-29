import React from 'react'
import { Button, Row, Col } from 'reactstrap'
import CreateNoteInput from './CreateNoteInput'
import "../CSS/ListColumn/ListColumn.css"


function ListColumn(props: any) {
    
    const {setCreateNote, createNote, setNotes, setSelectedNoteID} = props
    const handleClick = () => {
        setCreateNote(!createNote)
    }

    return (
        <div id="list-column">
        <Row>
            <Col className="text-nowrap">
                <h5>Your Notes</h5>
            </Col>
            <Col xs="1">
                <Button
                id= "newNoteButton" 
                color="link" 
                size="sm" 
                className="float-right"
                onClick={handleClick}>
                    {createNote ? "-":"+"}
                </Button>    
            </Col>
        </Row>
        {
            createNote
            ? (<div><CreateNoteInput 
            setSelectedNoteID={setSelectedNoteID}
            setNotes={setNotes}
            setCreateNote={setCreateNote}/>
            </div>)
            : null
        }
            {props.children}
        </div>
    )
}

export default ListColumn