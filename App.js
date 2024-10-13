import React, { useState } from 'react';
import './App.css';

const StackApp = () => {
  const [stack, setStack] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 


  const handlePush = () => {
    if (inputValue !== '' && stack.length < 10) {
      setStack([...stack, inputValue]); 
      setInputValue('');
    }
  };

  
  const handlePop = () => {
    if (stack.length > 0) {
      setStack(stack.slice(0, stack.length - 1));  
    }
  };

  const stackSlots = Array(10).fill(null);

  return (
    <div className="container">
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter value"
        className="input-field"
      />
      <div className="button-group">
        <button onClick={handlePop} className="btn">Pop</button>
        <button onClick={handlePush} className="btn">Push</button>
      </div>
      <div className="stack-display">
        {stackSlots.map((_, index) => (
          <div key={index} className="stack-item">
            {stack[stackSlots.length - 1 - index] || ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackApp;
