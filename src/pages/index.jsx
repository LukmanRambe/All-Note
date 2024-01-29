import { useCallback, useEffect, useState } from 'react';

import { useOutletContext } from 'react-router-dom';

import Category from '../components/main/Category';
import EmptyNotes from '../components/main/EmptyNotes';
import Header from '../components/main/Header';
import NoteCard from '../components/main/NoteCard';

import { AllNotes, Content, Loader, NotesListHeader, Title, Wrapper } from '../styles/NoteList.styles';
import { getActiveNotes } from '../utils/data';

const ActiveNotes = () => {
	const [notes, setNotes] = useState();

	const {
		category,
		setCategory,
		setIsModalShown,
		setNoteId,
		isLoading,
		setIsLoading,
		searchParams,
		setSearchParams,
		searchResults,
		setSearchResults,
	} = useOutletContext();

	const activeNotes = searchParams.get('search') ? searchResults.filter((note) => !note.archived) : notes;

	const handleSearch = useCallback(
		(title) => {
			setSearchResults(notes?.filter((note) => note.title.toLowerCase().includes(title?.trim() || '')));
		},
		[notes, setSearchResults]
	);

	useEffect(() => {
		setIsLoading(false);
	}, [setIsLoading]);

	useEffect(() => {
		getActiveNotes().then((response) => {
			if (!response.error) {
				setNotes(response.data);
			}
		});
	}, []);

	return (
		<Wrapper>
			<Content>
				<NotesListHeader>
					<Header
						searchParams={searchParams}
						setSearchParams={setSearchParams}
						setIsLoading={setIsLoading}
						handleSearch={handleSearch}
					/>

					<>
						<Title>{category.text}</Title>
						<Category setCategory={setCategory} />
					</>
				</NotesListHeader>

				{isLoading ? (
					<Loader>
						<span className='loader' />
					</Loader>
				) : activeNotes === null || activeNotes?.filter((note) => !note.archived).length === 0 ? (
					<EmptyNotes />
				) : (
					<>
						<AllNotes>
							{activeNotes
								?.filter((note) => !note.archived)
								?.map((note) => (
									<NoteCard
										key={note.id}
										id={note.id}
										title={note.title}
										createdAt={note.createdAt}
										body={note.body}
										archived={note.archived}
										setNoteId={setNoteId}
										setIsModalShown={setIsModalShown}
									/>
								))}
						</AllNotes>
					</>
				)}
			</Content>
		</Wrapper>
	);
};

export default ActiveNotes;
