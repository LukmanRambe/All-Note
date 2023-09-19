import { useState } from 'react';

// Components
import Category from '../Category';
import ActionButton from '../artifacts/buttons/ActionButton';
import DeleteButton from '../artifacts/buttons/DeleteButton';
import EmptyNotes from '../EmptyNotes';
import NoteDetailModal from '../artifacts/modals/NoteDetailModal';
import DeleteNoteModal from '../artifacts/modals/DeleteNoteModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

// Styling
import {
	Wrapper,
	Content,
	Title,
	NotesListHeader,
	AllNotes,
	Note,
	NoteDetail,
	NoteDetailHeader,
	DetailButton,
	CreatedAt,
	NoteTitle,
	NoteText,
	Actions,
	Loader,
} from './Notes.styles';

// Utils
import { formatDate } from '../../utils/formatDate';

const Notes = ({
	notes,
	category,
	categories,
	setCategories,
	setCategory,
	searchedNotes,
	searchQuery,
	changeArchiveStatus,
	isModalShown,
	setIsModalShown,
	deleteNote,
	isLoading,
}) => {
	const [noteData, setNoteData] = useState({});
	const [noteId, setNoteId] = useState('');

	const handleOpenModal = (data) => {
		setNoteData(data);
		setIsModalShown({ value: true, type: 'detail' });
	};

	const allNotesArray =
		searchQuery.trim() !== ''
			? searchedNotes.filter((note) => note.archived === category.archived)
			: notes.filter((note) => note.archived === category.archived);

	const allNotes = allNotesArray.map((note) => {
		const { id, title, createdAt, body, archived } = note;

		return (
			<Note key={id} id={id}>
				<NoteDetail>
					<NoteDetailHeader>
						<div>
							<NoteTitle>{title}</NoteTitle>
							<CreatedAt>{formatDate(createdAt)}</CreatedAt>
						</div>

						<DetailButton onClick={() => handleOpenModal(note)} title={`Note Detail - ${title}`}>
							<FontAwesomeIcon icon={faInfo} className='icon' />
						</DetailButton>
					</NoteDetailHeader>

					<NoteText>{body}</NoteText>
				</NoteDetail>

				<Actions>
					<ActionButton
						id={id}
						archived={archived}
						text={archived ? 'Activate' : 'Archive'}
						changeArchiveStatus={changeArchiveStatus}
					/>
					<DeleteButton noteId={id} text='Delete' setIsModalShown={setIsModalShown} setNoteId={setNoteId} />
				</Actions>
			</Note>
		);
	});

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
						<span className='loader' />
					</Loader>
				) : allNotes === null || allNotes.length === 0 ? (
					<EmptyNotes text="There's No Note" />
				) : (
					<>
						<AllNotes>{allNotes}</AllNotes>

						{isModalShown.value && isModalShown.type === 'detail' && (
							<NoteDetailModal setIsModalShown={setIsModalShown} data={noteData} setNoteData={setNoteData} />
						)}

						{isModalShown.value && isModalShown.type === 'delete' && (
							<DeleteNoteModal
								noteId={noteId}
								setNoteId={setNoteId}
								deleteNote={deleteNote}
								setIsModalShown={setIsModalShown}
							/>
						)}
					</>
				)}
			</Content>
		</Wrapper>
	);
};

export default Notes;
