import React, { useEffect, useRef } from 'react';
import { Input } from 'antd-mobile';

const AutoFocusInput = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const length = inputRef.current.nativeElement.value.length;
      inputRef.current.focus();
      inputRef.current.nativeElement.setSelectionRange(length, length);
    }
  }, []);

  return <Input ref={inputRef} {...props} />;
};

export default AutoFocusInput;
