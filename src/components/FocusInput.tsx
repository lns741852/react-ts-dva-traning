import React, { useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        inputRef.current?.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="點擊按鈕自動聚焦" />
            <button onClick={handleFocus}>點我聚焦</button>
        </div>
    );
};

export default FocusInput;
