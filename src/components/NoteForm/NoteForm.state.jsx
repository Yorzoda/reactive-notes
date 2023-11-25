export const INITIAL_STATE = {
	isValid:{
		title:true,
		text:true,
		date:true
	},
	values:{
		title:'',
		text:'',
		date:'' 
	},
	isFormReady:false
};

export function formReducer(state,action){
	switch(action.type) {
	case 'RESET_VALIDITY':
		return {...state,isValid:INITIAL_STATE.isValid};
	case 'SUBMIT':{
		console.log(typeof(state.values.text));
		const titleValidation = state.values.title.length;
		const textValidation = state.values.text?.trim().length;
		const dateValidation = state.values.date;
		return {
			...state,
			isValid:{
				title:titleValidation,
				text:textValidation,
				date:dateValidation
			},
			isFormReady: titleValidation && textValidation && dateValidation
		};
	}
	case 'CLEAR':{ 
		return{...state,values:INITIAL_STATE.values,isValid:false};
	}
	case 'SET_VALUE':{
		return{...state,values:{...state.values,...action.payload}};
	}
	}
}