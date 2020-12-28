import React from 'react'
import { Button, Row, Col } from 'reactstrap'
import CreateNoteInput from './CreateNoteInput'
import "../CSS/ListColumn/ListColumn.css"


function ListColumn(props: any) {
    
    const {setCreateNote, createNote, notes, setNotes, setSelectedNoteID} = props
    const handleClick = () => {
        setCreateNote(!createNote)
    }

    return (
        <>
        <Row>
            <Col>
                <h1>List</h1>
            </Col>
            <Col>
                <Button 
                id= "newNoteButton" 
                color="success" 
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
            notes={notes}
            setNotes={setNotes}/>
            </div>)
            : null
        }
            {props.children}
        </>
    )
}

export default ListColumn