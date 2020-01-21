import React, {useContext} from 'react';

import Context from '../store/context';

const List = () => {
	const {state, actions} = useContext(Context);

	return (
		<div>
			<h3>{state.value}</h3>
			<div>
              <input type="text" value={state.value} onChange={(e) => actions({
              	type: 'setState',
              	payload : {
              		...state, value : e.target.value
              	}
              })} />
			</div>	
		</div>
	)
}

export default List;