import style from './NoteItem.module.css';

function NoteItem({title,date,text}) {
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);
	return (
		<>
			<h2 className={style['note-item__header']}>{title}</h2>
			<h2 className={style['note-item__body']}>
				<div className={style['note-item__date']}>{formatedDate}</div>
				<div className={style['note-item__text']}>{text}</div>
			</h2>
		</>
	);
} 

export default NoteItem; 