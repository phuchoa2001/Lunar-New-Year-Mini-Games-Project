import React, { useEffect, useRef } from 'react';
import { TextArea } from 'antd-mobile';

const AutoFocusTextArea = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const length = inputRef.current.nativeElement.value.length;
      inputRef.current.focus();
      inputRef.current.nativeElement.setSelectionRange(length, length);
    }
  }, []);

  return <TextArea ref={inputRef} {...props} />;
};

export default AutoFocusTextArea;
