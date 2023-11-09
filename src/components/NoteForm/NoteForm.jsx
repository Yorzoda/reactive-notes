import style from './NoteForm.module.css';
import clN from 'classnames';
import Button from '../Button/Button';
import { useEffect, useReducer } from 'react';
import { INITIAL_STATE, formReducer } from './NoteForm.state';


function NoteForm({submitItem}) {
	const[formState,dispatchForm] = useReducer(formReducer,INITIAL_STATE);
	const {isValid,isFormReady,values} = formState;

	useEffect(()=>{
		let timerID;
		if(!isValid.date || !isValid.text || !isValid.title) {
			timerID = setTimeout(() => {
				dispatchForm({type:'RESET_VALIDITY'});
			}, 2000);
		}
		return () => {
			clearTimeout(timerID);
		};
	},[isValid]);

	useEffect(()=> {
		if(isFormReady) {
			submitItem(values);
			dispatchForm({type:'CLEAR'});
		}
	},[isFormReady]);

	const onFormChange = (e) => {
		dispatchForm({type:'SET_VALUE',payload:{[e.target.name]:[e.target.value]}});
	};


	const submit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		dispatchForm({type:'SUBMIT',payload:formProps});
	};

	return (
		<form className={style['note-form']} onSubmit={submit}>
			<div className={style['form-row']}>
				<input type="text" name='title' onChange={onFormChange} className={clN(style['input-title'], {[style['invalid']]:!isValid.title})}/>
			</div>
			<div className={style['form-row']}>
				<label htmlFor="date" className={style['form-label']}>
					<img src="/calendar.svg" alt="calendar" />
					<span>Дата</span>
				</label>
				<input type="date" name='date' id='date'  onChange={onFormChange} className={clN(style['input'], {[style['invalid']]:!isValid.date})}/>
			</div>
			<textarea name="text" id="" cols="30" rows="10" onChange={onFormChange} className={clN(style['input'], {[style['invalid']]:!isValid.text})}></textarea>
			<Button text="Save note" />
		</form> 
	);
}

export default NoteForm;