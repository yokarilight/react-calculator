export const evaluate = ({ currentOperand, previousOperand, operation }) => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) {
    return '';
  }

  let computation = '';
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '÷':
      computation = prev / current;
      break;
    default:
      break;
  }

  return computation.toString();
}

export const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0
});

export const formatOperand = (operand) => {
	if (operand === null) {
		return;
	}

	const [ integer, decimal ] = operand.split('.');

	if (decimal) {
		return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
	} else {
		return INTEGER_FORMATTER.format(integer);
	}
}

export const toCapitalizeFirstLetter = (str) => {
  const arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(' ');
}
