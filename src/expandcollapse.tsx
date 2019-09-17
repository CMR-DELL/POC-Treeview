import * as React from 'react';
import {ExpandCollapseType} from './treetypes';


const ExpandCollapse = (props : ExpandCollapseType) => {
  //var text = (nodeInfo.currentCheckedState) ? "-": "+";
  return (
    <span>+</span>
    // <span onClick={e => {        
    //   if (onClickEvent) {
    //     onClickEvent(nodeInfo);
    //   }
    // }} >{text}</span>
  );
};

export default ExpandCollapse;