import CardButton from '../CardButton/CardButton';
import './NoteAddButton.css';

function NoteAddButton() {
	return (
		<CardButton className ='note-add'>
			<img src="/add.svg" alt="add-note" className='note-add-btn' />
			Add note
		</CardButton>
	);
}

export default NoteAddButton;