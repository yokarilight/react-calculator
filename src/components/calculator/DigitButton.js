import { ACTIONS } from '../../actions/actions';

export default function DigitButton({ dispatch, digit, overwrite }) {
  return (
    <button
      disabled={digit === '.' && overwrite}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}
