import React from 'react'

// Styling
import { Wrapper, Content, Logo, Text } from './Navbar.styles'

const Navbar = ({ text }) => {
	return (
		<Wrapper>
			<Content>
				<Logo src='assets/images/notes.png' />
				<Text>{text}</Text>
			</Content>
		</Wrapper>
	)
}

export default Navbar
