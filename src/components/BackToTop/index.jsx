// Styling
import { Wrapper, Content } from './BackToTop.styles'

// Component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const BackToTop = () => {
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			left: 0
		})
	}

	return (
		<Wrapper>
			<Content onClick={handleClick}>
				<FontAwesomeIcon icon={faArrowUp} className='icon' />
			</Content>
		</Wrapper>
	)
}

export default BackToTop
