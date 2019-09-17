import * as React from 'react';
import {CheckboxType} from './treetypes'


const Checkbox = ({ checked, disabled = false, onNodeCheck }: CheckboxType) => {
  return (
    <input
      type="checkbox"
      className=""      
      ref={input => {
        
        if (input) {
          input.checked = checked;
          input.disabled = disabled as boolean;
        }
      }}
      onChange={e => {        
        if (onNodeCheck) {
            onNodeCheck(e);
        }
      }}
    />
  );
};

export default Checkbox;