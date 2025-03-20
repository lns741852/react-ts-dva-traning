import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const ChildInput = forwardRef((_, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focusInput: () => inputRef.current?.focus(),
    }));

    return <input ref={inputRef} type="text" placeholder="子組件的輸入框" />;
});

export default ChildInput;
