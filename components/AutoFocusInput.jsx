import React, { useEffect, useRef } from 'react';
import { Input } from 'antd-mobile';

const AutoFocusInput = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return <Input ref={inputRef} {...props} />;
};

export default AutoFocusInput;
