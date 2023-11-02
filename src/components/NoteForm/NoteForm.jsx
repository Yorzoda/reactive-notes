import './NoteForm.css';
import Button from '../Button/Button';


function NoteForm({submitItem}) {

	const submit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		submitItem(formProps);
		console.log(formProps);
	};

	return (
		<form className='note-form' onSubmit={submit}>
			<input type="text" name='title' />
			<input type="date" name='date' />
			<textarea name="text" id="" cols="30" rows="10"></textarea>
			<Button text="Save note" />
		</form>
	);
}

export default NoteForm;