const formatDate = (date) => {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	return new Date(date).toLocaleDateString('en-US', options);
};

export { formatDate };
