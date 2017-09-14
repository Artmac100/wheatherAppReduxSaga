export default function cityRenderReducer( state = false, action) {
	switch (action.type) {
		case 'CITY_STATE':
			return action.cityRender;
		case 'FORM_STATE':
			return action.cityRender;
		default: 
			return state;
	}
}