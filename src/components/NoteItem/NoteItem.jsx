import './NoteItem.css';

function NoteItem({title,text,date}) {

	return (
		<>
			<h2 className='note-item__header'>{title}</h2>
			<h2 className='note-item__body'>
				<div className='note-item__date'>{new Intl.DateTimeFormat('ru-RU').format(date)}</div>
				<div className='note-item__text'>{text}</div>
			</h2>
		</>
	);
} 

export default NoteItem;