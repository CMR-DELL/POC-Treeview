import * as React from 'react';
import {ExpandCollapseType} from './treetypes';


const ExpandCollapse = (props : ExpandCollapseType) => {
  var text = (props.Opened) ? "-": "+";
  return (<span>{text}</span>);
    // <span onClick={e => {        
    //   if (props.onClick) {
    //     props.onClick(e);
    //   }
    // }}>{text}</span>    
  
};

export default ExpandCollapse;