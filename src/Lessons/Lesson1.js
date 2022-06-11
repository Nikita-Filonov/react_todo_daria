import React, {useState, useEffect, useMemo, useCallback} from 'react';
import './App.css';
import MemoExample from './MemoExample';

export const App = ({color}) => {
  const [number, setNumber] = useState(5);
  const [label, setLabel] = useState('');
  
  const complexNumber = useMemo(() => number * 2, []);

  useEffect(() => {
    console.log('Calling some API')
  }, [label, color]);
  
  const onIncrease = useCallback(() => setNumber(number + 1), [label]);

  const onLabel = (event) => setLabel(event.target.value);

  return (
    <div>
      <p>{number}</p>
      <button onClick={onIncrease}>
        Increase
      </button>
      <br></br>
      <p>{label}</p>
      <input onChange={onLabel}/>
      <p>{complexNumber}</p>
      <MemoExample number={number}/>
    </div>
  );
};