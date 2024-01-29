import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	justify-content: center;
`;

export const Content = styled.article`
	padding: 1rem;
`;

export const Text = styled.p`
	font-size: 1rem;
	text-align: center;
	color: ${(props) => props.theme.colors.text};
`;
