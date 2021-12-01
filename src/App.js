import { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
import './style.css';

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      const { digit } = payload;
      if (digit === '0' && state.currentOperand === '0') {
        return state;
      }
      if (digit === '.' && state.currentOperand.includes('.')) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${digit}`
      }
    case ACTIONS.CHOOSE_OPERATION:
      const { operation } = payload;
      if (state.currentOperand === null && state.previousOperand === null) {
        return state;
      }

      return {
        ...state,
        currentOperand: null,
        previousOperand: state.currentOperand,
        operation: operation
      }
    case ACTIONS.CLEAR:
      return {
        currentOperand: null,
        previousOperand: null,
        operation: null
      }
    case ACTIONS.DELETE_DIGIT:
      if (state.currentOperand === null) {
        return state;
      }

      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null
        }
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      }
    default:
      return state;
  }
}

function App() {
  const [{ currentOperand = null, previousOperand = null, operation = null }, dispatch] = useReducer(reducer, {});
  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-calculate'>{previousOperand} {operation}</div>
        <div className='current-calculate'>{currentOperand}</div>
      </div>
      <button className='span-two' onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
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
      <DigitButton digit='.' dispatch={dispatch} />
      <DigitButton digit='0' dispatch={dispatch} />
      <button className='span-two'>=</button>
    </div>
  );
}

export default App;
