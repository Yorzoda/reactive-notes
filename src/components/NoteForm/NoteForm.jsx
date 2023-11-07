import style from './NoteForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';


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
			<input type="text" name='title' className={`${style['input']} ${validState.title ? '': style['invalid']}`}/>
			<input type="date" name='date' className={`${style['input']} ${validState.date ? '': style['invalid']}`}/>
			<textarea name="text" id="" cols="30" rows="10" className={`${style['input']} ${validState.text ? '': style['invalid']}`}></textarea>
			<Button text="Save note" />
		</form>
	);
}

export default NoteForm;