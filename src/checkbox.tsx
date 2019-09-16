import * as React from 'react';
import {CheckboxType} from './treetypes'


const Checkbox = ({ checked, indeterminate = false, className = '', style = {}, disabled = false, onNodeCheck }: CheckboxType) => {
  return (
    <input
      type="checkbox"
      className={className}
      style={style}
      ref={input => {
        
        if (input) {
          input.checked = checked;
          input.indeterminate = indeterminate as boolean;
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