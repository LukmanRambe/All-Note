import React from 'react'

// Styling
import { Button } from './DeleteButton.styles'

const DeleteButton = ({ text, id, deleteNote }) => {
	return <Button onClick={e => deleteNote(e, id)}>{text}</Button>
}

export default DeleteButton
