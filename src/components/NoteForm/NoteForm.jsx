import style from './NoteForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';
import clN from 'classnames';


function NoteForm({submitItem}) {
	const[validState,setValidState] = useState({
		title:true,
		text:true,
		date:true
	});
	let isFormValid = true;
	const submit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		
		if (!formProps.title?.trim().length) {
			setValidState(state =>({...state,title:false}));
			isFormValid = false;
		} else {
			setValidState(state =>({...state,title:true}));
		}

		if (!formProps.text?.trim().length) {
			setValidState(state =>({...state,text:false}));
			isFormValid = false;
		} else {
			setValidState(state =>({...state,text:true}));
		}  

		if (!formProps.date) {
			setValidState(state =>({...state,date:false}));
			isFormValid = false;
		} else {
			setValidState(state =>({...state,date:true}));
		}

		if (!isFormValid) {
			return;
		}		
		submitItem(formProps);
	};

	return (
		<form className={style['note-form']} onSubmit={submit}>
			<div className={style['form-row']}>
				<input type="text" name='title' className={clN(style['input-title'], {[style['invalid']]:!validState.title})}/>
			</div>
			<div className={style['form-row']}>
				<label htmlFor="date" className={style['form-label']}>
					<img src="/calendar.svg" alt="calendar" />
					<span>Дата</span>
				</label>
				<input type="date" name='date' id='date' className={clN(style['input'], {[style['invalid']]:!validState.date})}/>
			</div>
			<textarea name="text" id="" cols="30" rows="10" className={clN(style['input'], {[style['invalid']]:!validState.text})}></textarea>
			<Button text="Save note" />
		</form> 
	);
}

export default NoteForm;