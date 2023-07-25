import React, {useState} from 'react';
import s from './Counter.module.scss'

export const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <div onClick={()=> setCount(count + 1)}>
                +
            </div>
            <div className={s.count}>{count}</div>
        </>


    );
};

