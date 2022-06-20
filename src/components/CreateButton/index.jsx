import React from 'react'

// Styling
import { Button } from './CreateButton.styles'

const CreateButton = ({ text, isFormShown, setIsFormShown }) => {
	const handleClick = () => {
		setIsFormShown(!isFormShown)
	}

	return <Button onClick={handleClick}>{text}</Button>
}

export default CreateButton
