import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 1.5rem 5rem;

	@media only screen and (max-width: 600px) {
		padding: 1.5rem 1.5rem;
	}
`

export const Content = styled.div`
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 600px) {
		flex-direction: column-reverse;
		gap: 1rem;
	}
`
