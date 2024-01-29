import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BASE_URL, fetchWithToken, getAccessToken, putAccessToken, removeAccessToken } from '../../../utils/data';

export const AuthContext = createContext({
	user: {
		id: '',
		name: 'user',
		email: '',
	},
	setUser: () => {},
	isAuth: false,
	setIsAuth: () => false,
	register: () => null,
	login: () => null,
	logout: () => null,
	getUserLogged: () => null,
	response: {
		status: '',
		message: '',
		data: null,
	},
	setResponse: () => {},
});

const AuthContextProvider = ({ children }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const [user, setUser] = useState({
		id: '',
		name: 'user',
		email: '',
	});
	const [isAuth, setIsAuth] = useState(() => getAccessToken());
	const [response, setResponse] = useState({
		status: '',
		message: '',
		data: null,
	});

	const register = async ({ name, email, password }) => {
		const response = await fetch(`${BASE_URL}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, password }),
		});

		const responseJson = await response.json();

		if (responseJson.status !== 'success') {
			setResponse({
				status: responseJson.status,
				message: responseJson.message,
			});
		}

		setResponse({
			status: responseJson.status,
			message: responseJson.message,
		});

		navigate('/auth/login');
	};

	const login = async ({ email, password }) => {
		const response = await fetch(`${BASE_URL}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		const responseJson = await response.json();

		if (responseJson.status !== 'success') {
			setResponse({
				status: responseJson.status,
				message: responseJson.message,
			});
		}

		setIsAuth(true);
		putAccessToken(responseJson.data.accessToken);
		setResponse({
			status: responseJson.status,
			message: responseJson.message,
			data: responseJson.data,
		});

		navigate('/');
	};

	const logout = async () => {
		removeAccessToken();
		setIsAuth(false);

		navigate('/auth/login');
	};

	const getUserLogged = async () => {
		const response = await fetchWithToken(`${BASE_URL}/users/me`);
		const responseJson = await response.json();

		if (responseJson.status !== 'success') {
			return { error: true, data: null };
		}

		setIsAuth(true);
		setUser({
			id: responseJson.data.id,
			name: responseJson.data.name,
			email: responseJson.data.email,
		});
	};

	useEffect(() => {
		if (!isAuth) {
			if (pathname === '/auth/register') {
				return navigate('/auth/register');
			}

			navigate('/auth/login');
		} else {
			if (pathname === '/auth/login' || pathname === '/auth/register') {
				navigate('/');
			}
		}

		getUserLogged();
	}, [navigate, pathname, isAuth]);

	const value = {
		user,
		setUser,
		isAuth,
		setIsAuth,
		register,
		login,
		logout,
		getUserLogged,
		response,
		setResponse,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
