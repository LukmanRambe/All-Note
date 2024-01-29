export const BASE_URL = 'https://notes-api.dicoding.dev/v1';

const categories = [
	{
		id: 1,
		path: '',
		archived: false,
		text: 'Active Notes',
	},
	{
		id: 2,
		path: 'archive',
		archived: true,
		text: 'Archived Notes',
	},
];

const getAccessToken = () => {
	return localStorage.getItem('xtan');
};

const putAccessToken = (accessToken) => {
	return localStorage.setItem('xtan', accessToken);
};

const removeAccessToken = () => {
	return localStorage.removeItem('xtan');
};

const fetchWithToken = async (url, options = {}) => {
	return fetch(url, {
		...options,
		headers: {
			...options.headers,
			Authorization: `Bearer ${getAccessToken()}`,
		},
	});
};

const addNote = async ({ title, body }) => {
	const response = await fetchWithToken(`${BASE_URL}/notes`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ title, body }),
	});

	const responseJson = await response.json();

	if (responseJson.status !== 'success') {
		return { error: true, data: null };
	}

	return { error: false, data: responseJson.data };
};

const getActiveNotes = async () => {
	const response = await fetchWithToken(`${BASE_URL}/notes`);
	const responseJson = await response.json();

	if (responseJson.status !== 'success') {
		return { error: true, data: null };
	}

	return { error: false, data: responseJson.data };
};

const getArchivedNotes = async () => {
	const response = await fetchWithToken(`${BASE_URL}/notes/archived`);
	const responseJson = await response.json();

	if (responseJson.status !== 'success') {
		return { error: true, data: null };
	}

	return { error: false, data: responseJson.data };
};

const getNote = async (id) => {
	const response = await fetchWithToken(`${BASE_URL}/notes/${id}`);
	const responseJson = await response.json();

	if (responseJson.status !== 'success') {
		return { error: true, data: null };
	}

	return { error: false, data: responseJson.data };
};

const archiveNote = async (id) => {
	const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
		method: 'POST',
	});

	const responseJson = await response.json();

	if (responseJson.status !== 'success') {
		return { error: true, data: null };
	}

	return { error: false, data: responseJson.data };
};

const unarchiveNote = async (id) => {
	const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
		method: 'POST',
	});

	const responseJson = await response.json();

	if (responseJson.status !== 'success') {
		return { error: true, data: null };
	}

	return { error: false, data: responseJson.data };
};

const deleteNote = async (id) => {
	const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
		method: 'DELETE',
	});

	const responseJson = await response.json();

	if (responseJson.status !== 'success') {
		return { error: true, data: null };
	}

	return { error: false, data: responseJson.data };
};

export {
	addNote,
	archiveNote,
	categories,
	deleteNote,
	fetchWithToken,
	getAccessToken,
	getActiveNotes,
	getArchivedNotes,
	getNote,
	putAccessToken,
	removeAccessToken,
	unarchiveNote,
};
