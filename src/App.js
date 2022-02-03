import React from 'react';
import Calculator from './components/calculator/index';
import Converter from './components/converter/index';
import './index.css';

const App = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Calculator />
      <Converter />
    </div>
  );
}

export default App;
