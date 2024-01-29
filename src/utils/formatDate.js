const formatDate = (date, lang) => {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	return new Date(date).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', options);
};

export { formatDate };
