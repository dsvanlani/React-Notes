import React from 'react'
import { Button } from 'reactstrap'
import { BsCardList } from 'react-icons/bs'

function ExpandButton(props: any) {
    const { setNoteListOpen } = props
    const handleExpand = () => {
        setNoteListOpen(true)
    }
    return (
        <Button 
            className="float-left" 
            size="sm"
            onClick={handleExpand}>
            <BsCardList/>
        </Button>
    )
}
export default ExpandButton