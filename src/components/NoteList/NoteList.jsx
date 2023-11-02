import './NoteList.css';

function NoteList({children}) {
	return (
		<div className='note-list'>{children}</div>
	);
}

export default NoteList;