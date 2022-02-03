import { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
import { ACTIONS } from '../../actions/actions';
import { reducer } from '../../reducers/reducers';
import { formatOperand } from '../../tool/utils';

const Calculator = () => {
	const [{ currentOperand, previousOperand, operation, overwrite }, dispatch] = useReducer(reducer, { currentOperand: null, previousOperand: null, operation: null, overwrite: false });

	return (
		<div className='calculator-grid'>
			<div className='output col-span-full bg-black bg-opacity-75 flex flex-col items-end justify-around p-3'>
				<div className='text-white text-opacity-75 text-2xl'>{formatOperand(previousOperand)} {operation}</div>
				<div className='text-white text-large'>{formatOperand(currentOperand)}</div>
			</div>
			<button className='grid-span-2 col-span-2' onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
			<button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
			<OperationButton operation='÷' dispatch={dispatch} />
			<DigitButton digit='1' dispatch={dispatch} />
			<DigitButton digit='2' dispatch={dispatch} />
			<DigitButton digit='3' dispatch={dispatch} />
			<OperationButton operation='*' dispatch={dispatch} />
			<DigitButton digit='4' dispatch={dispatch} />
			<DigitButton digit='5' dispatch={dispatch} />
			<DigitButton digit='6' dispatch={dispatch} />
			<OperationButton operation='+' dispatch={dispatch} />
			<DigitButton digit='7' dispatch={dispatch} />
			<DigitButton digit='8' dispatch={dispatch} />
			<DigitButton digit='9' dispatch={dispatch} />
			<OperationButton operation='-' dispatch={dispatch} />
			<DigitButton digit='.' overwrite={overwrite} dispatch={dispatch} />
			<DigitButton digit='0' dispatch={dispatch} />
			<button className='grid-span-2 col-span-2' onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>
		</div>
	);
}

export default Calculator;
