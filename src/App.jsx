import { useState, useEffect } from 'react';

// Components
import Notes from './components/Notes';
import CreateNoteModal from './components/artifacts/modals/CreateNoteModal';
import BackToTop from './components/artifacts/buttons/BackToTop';

// Hooks
import { useDebounce } from './hooks/useDebounce';

// Data
import allCategories from './data/categories';
import Layout from './components/Layout';

const App = () => {
	const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('NOTES')) || []);
	const [categories, setCategories] = useState(allCategories);
	const [category, setCategory] = useState(categories[0]);
	const [isModalShown, setIsModalShown] = useState({
		value: false,
		type: '',
	});
	const [formValues, setFormValues] = useState({ title: '', body: '' });
	const [searchQuery, setSearchQuery] = useState('');
	const [searchedNotes, setSearchedNotes] = useState(notes);
	const [countChar, setCountChar] = useState({
		title: 0,
		body: 0,
	});
	const [charLimitError, setCharLimitError] = useState({
		title: false,
		body: false,
	});
	const [isLoading, setIsLoading] = useState(true);
	const [showBackToTop, setShowBackToTop] = useState(false);
	const debouncedSearchQuery = useDebounce(searchQuery, 250);
	const titleMaxChar = 50;
	const bodyMaxChar = 1000;

	const handleFormChange = (e) => {
		setFormValues((prevState) => {
			return {
				...prevState,
				[e.target.name]:
					e.target.name === 'title' ? e.target.value.slice(0, titleMaxChar) : e.target.value.slice(0, bodyMaxChar),
			};
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const noteObject = {
			id: new Date().getTime().toString(),
			title: formValues.title.slice(0, titleMaxChar),
			body: formValues.body.slice(0, bodyMaxChar),
			createdAt: new Date().toISOString(),
			archived: false,
		};

		if (formValues.title !== '' && formValues.body !== '') {
			setNotes((oldNotes) => {
				return [noteObject, ...oldNotes];
			});
			setFormValues({ title: '', body: '' });
			setIsModalShown({ value: false, type: '' });
		}
	};

	const handleSearchChange = (e) => {
		const query = e.target.value.toLowerCase();
		setIsLoading(true);
		setSearchQuery(query);
	};

	const changeArchiveStatus = (e, id) => {
		setNotes((prevState) => {
			const newItem = prevState.map((item) => {
				return item.id === id ? { ...item, archived: !item.archived } : item;
			});

			return newItem;
		});
	};

	const deleteNote = (e, id) => {
		setNotes((prevState) => {
			const newNotes = prevState.filter((note) => note.id !== id);

			return newNotes;
		});
	};

	useEffect(() => {
		setCountChar({
			title: formValues.title.length,
			body: formValues.body.length,
		});

		if (formValues.title.length < titleMaxChar) {
			setCharLimitError((prevState) => {
				return {
					...prevState,
					title: false,
				};
			});
		} else {
			setCharLimitError((prevState) => {
				return {
					...prevState,
					title: true,
				};
			});
		}

		if (formValues.body.length < bodyMaxChar) {
			setCharLimitError((prevState) => {
				return {
					...prevState,
					body: false,
				};
			});
		} else {
			setCharLimitError((prevState) => {
				return {
					...prevState,
					body: true,
				};
			});
		}
	}, [formValues.title, formValues.body]);

	useEffect(() => {
		const newNotes = notes.filter((note) => note.title.toLowerCase().includes(debouncedSearchQuery.trim()));

		if (debouncedSearchQuery === '') {
			setSearchedNotes([]);
		} else {
			setIsLoading(true);
			setSearchedNotes(newNotes);
		}

		setIsLoading(false);
	}, [debouncedSearchQuery, notes]);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowBackToTop(true);
			} else {
				setShowBackToTop(false);
			}
		});
	}, []);

	useEffect(() => {
		localStorage.setItem('NOTES', JSON.stringify(notes));
	}, [notes]);

	return (
		<Layout
			setIsModalShown={setIsModalShown}
			text='All Note'
			searchQuery={searchQuery}
			handleSearchChange={handleSearchChange}>
			{isModalShown.value && isModalShown.type === 'create' && (
				<CreateNoteModal
					setIsModalShown={setIsModalShown}
					formValues={formValues}
					setFormValues={setFormValues}
					handleFormSubmit={handleFormSubmit}
					handleFormChange={handleFormChange}
					countChar={countChar}
					titleMaxChar={titleMaxChar}
					bodyMaxChar={bodyMaxChar}
					charLimitError={charLimitError}
				/>
			)}

			<Notes
				notes={notes}
				categories={categories}
				setCategories={setCategories}
				category={category}
				setCategory={setCategory}
				isModalShown={isModalShown}
				setIsModalShown={setIsModalShown}
				searchedNotes={searchedNotes}
				searchQuery={searchQuery}
				changeArchiveStatus={changeArchiveStatus}
				deleteNote={deleteNote}
				isLoading={isLoading}
			/>

			{showBackToTop && <BackToTop />}
		</Layout>
	);
};

export default App;
