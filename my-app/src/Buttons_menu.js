
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick_up() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
             {count} 
        </button>
    );
}


export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick_down() {
        setCount(count - 1);
    }
    if (count <= 1){
    return (
        <button onClick={handleClick}>
            {count} 
        </button>
    );
    }
    else { return (count);}
}