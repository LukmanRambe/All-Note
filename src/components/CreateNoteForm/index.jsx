import React from 'react'

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

// Styling
import {
	Wrapper,
	Content,
	Form,
	Title,
	Label,
	InputGroup,
	Input,
	CharLimit,
	Textarea,
	SubmitBtn,
	CloseBtn
} from './CreateNoteForm.styles'

const CreateNoteForm = ({
	isFormShown,
	setIsFormShown,
	formValues,
	setFormValues,
	handleFormSubmit,
	handleFormChange,
	countChar,
	maxChar,
	charLimitError
}) => {
	const handleClick = () => {
		setIsFormShown(!isFormShown)
		setFormValues({ title: '', body: '' })
	}

	return (
		<Wrapper>
			<Content>
				<Form onSubmit={e => handleFormSubmit(e)}>
					<Title>Note Form</Title>
					<InputGroup>
						<Label>Title</Label>
						<Input
							placeholder='Title'
							name='title'
							value={formValues.title}
							onChange={handleFormChange}
							autoFocus
						/>
						<CharLimit className={charLimitError ? 'error' : ''}>
							{`${countChar}/${maxChar} Max Characters`}
						</CharLimit>
					</InputGroup>
					<InputGroup>
						<Label>Notes</Label>
						<Textarea
							placeholder='Write Your Notes Here...'
							cols='30'
							rows='15'
							name='body'
							value={formValues.body}
							onChange={handleFormChange}
						/>
					</InputGroup>
					<SubmitBtn>Create Note</SubmitBtn>
					<CloseBtn onClick={handleClick}>
						<FontAwesomeIcon icon={faXmark} />
					</CloseBtn>
				</Form>
			</Content>
		</Wrapper>
	)
}

export default CreateNoteForm
