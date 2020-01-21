import {useState} from 'react';
import globalState from './state'

const useGlobalState = () => {
	const [state,setState] = useState(globalState);

	const actions = (action) => {
		const {type,payload} = action;

		switch (type) {
			case 'setState':
				return setState(payload);
			default :
				return state;	
		}
	}
	return {state, actions}
}

export default useGlobalState;