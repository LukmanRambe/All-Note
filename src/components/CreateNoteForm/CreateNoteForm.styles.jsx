import styled from 'styled-components'

export const Wrapper = styled.div`
	top: 0;
	left: 0;
	position: fixed;
	height: 100%;
	width: 100%;
`

export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	position: absolute;
	padding: 0 1.5rem;
	background: rgba(0, 0, 0, 0.4);
`

export const Form = styled.form`
	display: flex;
	gap: 1rem;
	position: relative;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: var(--white);
	border-radius: 0.4rem;
	padding: 0 3rem;
	width: 100%;
	height: 100%;
	max-width: 32rem;
	max-height: 37rem;

	@media only screen and (max-width: 600px) {
		padding: 0 1.2rem;
		max-width: 30rem;
		max-height: 35rem;
	}

	@media only screen and (max-width: 360px) {
		padding: 0 1rem;
		max-height: 26rem;
		gap: 0.5rem;
	}
`

export const Title = styled.h3`
	font-size: 1.7rem;
	margin-bottom: 0.5rem;
	font-weight: 700;

	@media only screen and (max-width: 360px) {
		font-size: 1.4rem;
		margin-bottom: 0.2rem;
	}
`

export const InputGroup = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`

export const Label = styled.h5`
	font-size: 1rem;
	align-self: flex-start;
	margin-bottom: 0.3rem;

	@media only screen and (max-width: 360px) {
		font-size: 0.9rem;
	}
`

export const Input = styled.input`
	width: 100%;
	padding: 0.5rem;
	border-radius: 0.4rem;
	border: 2px solid var(--grey);

	:focus,
	:active {
		outline: none;
		transition: all 0.15s ease-in-out;
		border: 2px solid var(--black);
	}
`

export const CharLimit = styled.span`
	font-size: 0.7rem;
	font-weight: 700;
	margin-top: 0.3rem;
	color: var(--green);
	align-self: flex-end;

	&.error {
		color: var(--red);
	}
`

export const Textarea = styled.textarea`
	width: 100%;
	border: 2px solid var(--grey);
	padding: 0.5rem;
	border-radius: 0.4rem;
	resize: none;

	:focus,
	:active {
		outline: none;
		transition: all 0.15s ease-in-out;
		border: 2px solid var(--black);
	}

	@media only screen and (max-width: 360px) {
		height: 9rem;
	}
`

export const SubmitBtn = styled.button`
	cursor: pointer;
	width: 100%;
	padding: 0.7rem;
	border-radius: 0.4rem;
	margin-top: 1.5rem;
	font-size: 1rem;
	color: var(--white);
	background: var(--black);
	border: 2px solid transparent;
	font-weight: 700;

	:hover,
	:active,
	:focus {
		transition: all 0.15s ease-in-out;
		color: var(--black);
		background: var(--white);
		border: 2px solid var(--black);
	}

	@media only screen and (max-width: 360px) {
		margin-top: 1.2rem;
	}
`

export const CloseBtn = styled.span`
	cursor: pointer;
	color: var(--grey);
	padding: 0.2rem;
	position: absolute;
	top: 1rem;
	right: 2.5rem;
	font-size: 1.2rem;

	:hover,
	:focus,
	:active {
		transition: all 0.15s ease-in-out;
		color: var(--black);
	}

	@media only screen and (max-width: 600px) {
		top: 0.7rem;
		right: 1.5rem;
	}

	@media only screen and (max-width: 360px) {
		top: 0.5rem;
		right: 1.2rem;
	}
`
