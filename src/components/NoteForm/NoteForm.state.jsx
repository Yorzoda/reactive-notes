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
		const titleValidation = action.payload.title?.trim().length;
		const textValidation = action.payload.text?.trim().length;
		const dateValidation = action.payload.date;
		return {
			values:action.payload,
			isValid:{
				title:titleValidation,
				text:textValidation,
				date:dateValidation
			},
			isFormReady: titleValidation && textValidation && dateValidation
		};
	}
	case 'CLEAR':{
		return{...state,payload:INITIAL_STATE.values};
	}
	case 'SET_VALUE':{
		return{...state,values:{...state.payload,...action.payload}};
	}
	}
}