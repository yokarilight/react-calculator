import { ACTIONS } from '../actions/actions';
import { evaluate } from '../tool/utils';

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      const { digit } = payload;
      if (state.overwrite){
        return {
          ...state,
          currentOperand: digit,
          overwrite: false
        }
      }

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

      if (state.currentOperand === null) {
        return {
          ...state,
          operation: operation
        }
      }

      if (state.previousOperand === null) {
        return {
          ...state,
          currentOperand: null,
          previousOperand: state.currentOperand,
          operation: operation
        }
      }

      return {
        ...state,
        currentOperand: null,
        previousOperand: evaluate(state),
        operation: operation,
      }
    case ACTIONS.CLEAR:
      return {
        currentOperand: null,
        previousOperand: null,
        operation: null
      }
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null
        }
      }

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
    case ACTIONS.EVALUATE:
      if (state.currentOperand === null || state.previousOperand === null || state.operation === null) {
        return state;
      }

      return {
        ...state, 
        overwrite: true,
        currentOperand: evaluate(state),
        previousOperand: null,
        operation: null
      }
    default:
      return state;
  }
}
