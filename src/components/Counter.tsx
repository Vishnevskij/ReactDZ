import React, {useState} from 'react'

export const Counter = () => {
const [counter, setCounter] = useState<number>(0);
const [isCounterEnabled, setIsCounterEnabled] = useState<boolean>(true);
const [name, setName] = useState<string[]>(["name1", "name2", "name3"]);

const onClickButton = (isIncrement: boolean) => {
  setCounter(isIncrement ? counter+1 : counter-1);
}

const changeName = (index: number) => {
  setName((name) => {
    const updatedNames = [...name];
    updatedNames[index] = 'changed';
    return updatedNames;
  });
};

const toggleCounterAvailability = () => setIsCounterEnabled(!isCounterEnabled);


  return (
    <div className='counter'>
      <button onClick={toggleCounterAvailability}>
        {isCounterEnabled ? "Hide": "Show"}
        </button>
      {
       isCounterEnabled && <h1>Counter: {counter}</h1>
             }
             {name.map((name, i)=> <div className="dz" key={`${name}-${i*1.5}`} onClick={()=> changeName(i)} >{name}</div> )}
      <button onClick={()=> onClickButton(true)}>+</button>
      <button onClick={()=> onClickButton(false)}>-</button>
      
      </div>
  )
}


