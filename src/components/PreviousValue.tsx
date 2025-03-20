import React, { useRef, useState, useEffect } from 'react';

const PreviousValue = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef<number>(count);

    useEffect(() => {
        prevCountRef.current = count; // 在每次渲染後更新
    });

    return (
        <div>
            <p>當前計數: {count}</p>
            <p>前一次的計數: {prevCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>增加</button>
        </div>
    );
};

export default PreviousValue;