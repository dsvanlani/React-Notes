import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import ListColumn from './ListColComponents/ListColumn'
import BodyColumn from './BodyColComponents/BodyColumn'
import NoteListItem from './ListColComponents/NoteListItem'
import apiUrl from './fetchurls'
import { BsList } from 'react-icons/bs'

function App() {
  const [notes, setNotes] = useState([])
  const [selectedNoteID, setSelectedNoteID] = useState(null)
  const [createNote, setCreateNote] = useState(false)
  const [noteListOpen, setNoteListOpen] = useState(true)

  useEffect(() => {
    fetch(apiUrl)
    .then(data => data.json())
    .then(response => {
      setNotes(response)
    })
  }, [])
 
  const notelistitems = notes.map(note => {
    const { id } = note
    return(
      <NoteListItem 
      data={note}
      setSelectedNoteID={setSelectedNoteID}
      key={id}/>)
    })

  const handleToggle = () => {
    setNoteListOpen(true)
  }

  const expandButton = (
    <Button
      size="sm"
      onClick={handleToggle}
      setNoteListOpen={setNoteListOpen}
      style={{display: noteListOpen ? "none":"false"}}>
        <BsList/>
    </Button>
  )

  return (
  <Container>
    <Row id="outermost-row">
      { noteListOpen 
      ? (
        <Col xs="3" id="list-column">
          <ListColumn 
          id="list-column"
          selectedNoteID={selectedNoteID}
          setSelectedNoteID={setSelectedNoteID}
          setCreateNote={setCreateNote}
          createNote={createNote}
          notes = {notes}
          setNotes={setNotes}
          setNoteListOpen={setNoteListOpen}>
            {notelistitems}
          </ListColumn>
        </Col>
      )
      : null
      }
      <Col>
        <BodyColumn 
        selectedNoteID={selectedNoteID}
        expandButton={expandButton}
        noteListOpen={noteListOpen}
        setNoteListOpen={setNoteListOpen}/>
      </Col>
    </Row>
  </Container>
  )}

export default App;
