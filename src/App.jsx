import React, { useState, useEffect } from 'react'

// Components
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import CreateNoteForm from './components/CreateNoteForm'
import Header from './components/Header'
import BackToTop from './components/BackToTop'

// Hooks
import { useDebounce } from './hooks/useDebounce'

// Global Style
import GlobalStyle from './GlobalStyles'

// Data
import allCategories from './categories'

const App = () => {
	const [notes, setNotes] = useState(
		() => JSON.parse(localStorage.getItem('NOTES')) || []
	)
	const [categories, setCategories] = useState(allCategories)
	const [category, setCategory] = useState(categories[0])
	const [isFormShown, setIsFormShown] = useState(false)
	const [formValues, setFormValues] = useState({ title: '', body: '' })
	const [searchQuery, setSearchQuery] = useState('')
	const [searchedNotes, setSearchedNotes] = useState(notes)
	const [maxChar, setMaxChar] = useState(50)
	const [countChar, setCountChar] = useState(0)
	const [charLimitError, setCharLimitError] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const [showBackToTop, setShowBackToTop] = useState(false)
	const debouncedSearchQuery = useDebounce(searchQuery, 250)

	const handleFormChange = e => {
		setFormValues(prevState => {
			return {
				...prevState,
				[e.target.name]:
					e.target.name === 'title'
						? e.target.value.slice(0, maxChar)
						: e.target.value
			}
		})
	}

	const handleFormSubmit = e => {
		e.preventDefault()

		const noteObject = {
			id: new Date().getTime().toString(),
			title: formValues.title.slice(0, 50),
			body: formValues.body,
			createdAt: new Date().toISOString(),
			archived: false
		}

		if (formValues.title !== '' && formValues.body !== '') {
			setNotes(oldNotes => {
				return [noteObject, ...oldNotes]
			})
			setFormValues({ title: '', body: '' })
			setIsFormShown(false)
		}
	}

	const handleSearchChange = e => {
		const query = e.target.value.toLowerCase()
		setIsLoading(true)
		setSearchQuery(query)
	}

	const changeArchiveStatus = (e, id) => {
		setNotes(prevState => {
			const newItem = prevState.map(item => {
				return item.id === id ? { ...item, archived: !item.archived } : item
			})

			return newItem
		})
	}

	const deleteNote = (e, id) => {
		setNotes(prevState => {
			const newNotes = prevState.filter(note => note.id !== id)

			return newNotes
		})
	}

	useEffect(() => {
		setCountChar(formValues.title.length)
		if (formValues.title.length < maxChar) {
			setCharLimitError(false)
		} else {
			setCharLimitError(true)
		}
	}, [formValues.title])

	useEffect(() => {
		const newNotes = notes.filter(note =>
			note.title.toLowerCase().includes(searchQuery.trim())
		)

		if (searchQuery === '') {
			setSearchedNotes([])
		} else {
			setIsLoading(true)
			setSearchedNotes(newNotes)
		}

		setIsLoading(false)
	}, [debouncedSearchQuery, notes])

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowBackToTop(true)
			} else {
				setShowBackToTop(false)
			}
		})
	}, [])

	useEffect(() => {
		localStorage.setItem('NOTES', JSON.stringify(notes))
	}, [notes])

	return (
		<>
			<Navbar text='All Note' />
			<Header
				isFormShown={isFormShown}
				setIsFormShown={setIsFormShown}
				searchQuery={searchQuery}
				handleSearchChange={handleSearchChange}
			/>
			{isFormShown ? (
				<CreateNoteForm
					isFormShown={isFormShown}
					setIsFormShown={setIsFormShown}
					formValues={formValues}
					setFormValues={setFormValues}
					handleFormSubmit={handleFormSubmit}
					handleFormChange={handleFormChange}
					countChar={countChar}
					maxChar={maxChar}
					charLimitError={charLimitError}
				/>
			) : null}
			<Notes
				notes={notes}
				categories={categories}
				setCategories={setCategories}
				category={category}
				setCategory={setCategory}
				searchedNotes={searchedNotes}
				searchQuery={searchQuery}
				changeArchiveStatus={changeArchiveStatus}
				deleteNote={deleteNote}
				isLoading={isLoading}
			/>
			{showBackToTop && <BackToTop />}
			<GlobalStyle />
		</>
	)
}

export default App
