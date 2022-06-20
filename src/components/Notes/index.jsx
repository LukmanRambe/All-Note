import React from 'react'

// Components
import Category from '../Category'
import ActionButton from '../ActionButton'
import DeleteButton from '../DeleteButton'

// Styling
import {
	Wrapper,
	Content,
	Title,
	NotesListHeader,
	AllNotes,
	Note,
	NoteDetail,
	CreatedAt,
	NoteTitle,
	NoteText,
	Actions,
	Loader
} from './Notes.styles'

// Utils
import { showFormattedDate } from '../../utils'
import EmptyNotes from '../EmptyNotes'

const Notes = ({
	notes,
	category,
	categories,
	setCategories,
	setCategory,
	searchedNotes,
	searchQuery,
	changeArchiveStatus,
	deleteNote,
	isLoading
}) => {
	const allNotesArray =
		searchQuery.trim() !== ''
			? searchedNotes.filter(note => note.archived === category.archived)
			: notes.filter(note => note.archived === category.archived)

	const allNotes = allNotesArray.map(note => {
		const { id, title, createdAt, body, archived } = note

		return (
			<Note key={id} id={id}>
				<NoteDetail>
					<NoteTitle>{title}</NoteTitle>
					<CreatedAt>{showFormattedDate(createdAt)}</CreatedAt>
					<NoteText>{body}</NoteText>
				</NoteDetail>
				<Actions>
					<ActionButton
						id={id}
						archived={archived}
						text={archived ? 'Activate' : 'Archive'}
						changeArchiveStatus={changeArchiveStatus}
					/>
					<DeleteButton id={id} text='Delete' deleteNote={deleteNote} />
				</Actions>
			</Note>
		)
	})

	return (
		<Wrapper>
			<Content>
				<NotesListHeader>
					<Title>{category.text}</Title>
					<Category
						categories={categories}
						setCategories={setCategories}
						category={category}
						setCategory={setCategory}
					/>
				</NotesListHeader>
				{isLoading ? (
					<Loader>
						<span className='loader'></span>
					</Loader>
				) : allNotes === null || allNotes.length === 0 ? (
					<EmptyNotes text="There's No Note" />
				) : (
					<AllNotes>{allNotes}</AllNotes>
				)}
			</Content>
		</Wrapper>
	)
}

export default Notes
