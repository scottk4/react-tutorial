import React, {useState} from 'react'
function Counter(){
    
    const [count, setCount] = useState(1)
    function handleDecrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    function handleReset(){
        setCount(0);
    }
    function handleIncrement(){
        setCount(c => c + 1);
    }
       
    return(<div>
            <p className="count-value">Count: {count}</p>
            <button className="count-button" onClick={handleDecrement}>Decrement</button>
            <button className="count-button" onClick={handleReset}>Reset</button>
            <button className="count-button" onClick={handleIncrement}>Increment</button>
        </div>);

}
export default Counter