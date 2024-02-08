import React, { useEffect, useRef } from 'react';
import { TextArea } from 'antd-mobile';

const AutoFocusTextArea = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return <TextArea ref={inputRef} {...props} />;
};

export default AutoFocusTextArea;
