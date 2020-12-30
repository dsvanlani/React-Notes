import React from 'react'
import { Button, Row, Col } from 'reactstrap'
import CreateNoteInput from './CreateNoteInput'
import "../CSS/ListColumn/ListColumn.css"
import { BsFillCaretLeftFill } from 'react-icons/bs'


function ListColumn(props: any) {
    
    const {setCreateNote, createNote, setNotes, setSelectedNoteID, setNoteListOpen, selectedNoteID} = props
    const handleClick = () => {
        setCreateNote(!createNote)
    }

    const handleToggle = () => {
        setNoteListOpen(false)
    }

    return (
        <div id="list-column">
            <Row id="list-column-header">
                <Col className="text-nowrap">
                    <span>Notes</span>
                    {
                        !!selectedNoteID
                        ? (
                            <Button
                                id="collapse-button"
                                onClick={handleToggle}
                                size="sm"
                                className="float-right">
                                    <BsFillCaretLeftFill/>
                            </Button>
                        )
                        : null
                    }
                </Col>
            </Row>
            <Col id="note-list-container">
                { !createNote 
                ? (
                    <Button
                        id= "newNoteButton" 
                        color="info" 
                        size="sm"
                        onClick={handleClick}>
                            New Note
                    </Button>   
                )
                : null 
                }
                {
                    createNote
                    ? (
                    <div>
                        <CreateNoteInput 
                            setSelectedNoteID={setSelectedNoteID}
                            setNotes={setNotes}
                            setCreateNote={setCreateNote}
                            />
                    </div>)
                    : null
                }
                    {props.children}
            </Col>
        </div>
    )
}

export default ListColumn