import { useContext } from 'react';
import { Button } from '../../../../styles/CreateButton.styles';
import { LanguageContext } from '../../../context/LanguageContext';

const CreateButton = () => {
	const { languageSets } = useContext(LanguageContext);

	return <Button to='/create'>{languageSets.header.createButton}</Button>;
};

export default CreateButton;
