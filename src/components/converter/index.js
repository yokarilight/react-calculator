import { useState, useEffect } from 'react';
import unitData from '../../data/unit.json';
import { toCapitalizeFirstLetter } from '../../tool/utils';

const Converter = () => {
	const [ unitType, setUnitType ] = useState('length');
  const [ leftUnit, setLeftUnit ] = useState('meter(m)');
  const [ rightUnit, setRightUnit ] = useState('meter(m)');
	const [ inputVal, setInputVal ] = useState('');
	const [ result, setResult ] = useState('');
	
	const CalculateUnit = (leftVal) => {
		let sourceValue = leftVal;
		sourceValue = parseFloat(sourceValue);

		if (!isNaN(sourceValue) || sourceValue === 0) {
			ConvertFromTo(sourceValue);
		}
	}
	
	const ConvertFromTo = (sourceVal) => {
		let leftUnitIndex;
		let rightUnitIndex;
		let leftFactor;
		let rightFactor;
		let res;

		leftUnitIndex = unitData[unitType].unit.indexOf(leftUnit);
		leftFactor = unitData[unitType].factor[leftUnitIndex];
		rightUnitIndex = unitData[unitType].unit.indexOf(rightUnit);
		rightFactor = unitData[unitType].factor[rightUnitIndex];
		res = sourceVal * leftFactor / rightFactor;

		setResult(res);
	}

	const handleChangeUnit = (e) => {

		e.target.id === 'inputType' ? setLeftUnit(e.target.value) : setRightUnit(e.target.value);
	}

	const resetState = () => {
		setInputVal('');
		setResult('');
		setLeftUnit(unitData[unitType].unit[0]);
		setRightUnit(unitData[unitType].unit[0]);
	}

	useEffect(() => {
		resetState();
	}, [ unitType ]);

	return (
		<div className='convertor-container m-8 flex flex-col justify-center items-center'>
			<h2 className='convert-title'>
				{toCapitalizeFirstLetter('converter')}
			</h2>
			<div className='flex'>
				{Object.keys(unitData).map((item, index) => (
					<div
						key={item + index}
						className={`unit-type cursor-pointer mx-2 hover:bg-light-purple hover:bg-opacity-90 duration-500 ${unitType === item ? 'bg-light-purple' : ''}`}
						onClick={() => setUnitType(item)}
					>
						{item}
					</div>
				))}
			</div>
			<div className='flex mt-2'>
				<input
					type='text'
					id='input'
					className='bg-white bg-opacity-30 outline-none'
					value={inputVal}
					onChange={(e) => setInputVal(e.target.value)}
				/>
				<span> = </span>
				<input
					type='text'
					id='result'
					className='bg-white bg-opacity-30 outline-none'
					value={result}
					disabled
				/>
			</div>
			<div className='unit-selector mt-2'>
				<select
					id='inputType'
					className='select text-center outline-none mr-3'
					onChange={(e) => handleChangeUnit(e)}
				>
					{unitData[unitType].unit.map((item, index) => (
						<option
							key={item + index}
							value={item}
						>
							{item}
						</option>
					))}
				</select>
				<select
					id='resultType'
					className='select text-center outline-none'
					onChange={(e) => handleChangeUnit(e)}
				>
					{unitData[unitType].unit.map((item, index) => (
						<option
							key={item + index}
							value={item}
						>
							{item}
						</option>
					))}
				</select>
			</div>
			<div
				className='convert-btn font-bold text-small text-center cursor-pointer py-2 mt-2 hover:bg-light-purple hover:bg-opacity-90 duration-500'
				onClick={() => CalculateUnit(inputVal)}
			>
				convert
			</div>
		</div>
	);
}

export default Converter;
