import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ListColumn from './ListColComponents/ListColumn'
import BodyColumn from './BodyColComponents/BodyColumn'
import NoteListItem from './ListColComponents/NoteListItem'
import apiUrl from './fetchurls'

function App() {
  const [notes, setNotes] = useState([])
  const [selectedNoteID, setSelectedNoteID] = useState(null)
  const [createNote, setCreateNote] = useState(false)

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

  return (
  <Container fluid={true}>
    <Row noGutters={true}>
      <Col xs="3">
        <ListColumn 
        setSelectedNoteID={setSelectedNoteID}
        setCreateNote={setCreateNote}
        createNote={createNote}
        notes = {notes}
        setNotes={setNotes}>
          {notelistitems}
        </ListColumn>
      </Col>
      <Col><BodyColumn selectedNoteID={selectedNoteID}></BodyColumn></Col>
    </Row>
  </Container>
  )}

export default App;
