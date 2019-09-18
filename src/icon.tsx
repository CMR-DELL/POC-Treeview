import * as React from 'react';
import {TreeNodeIconType} from './treetypes';

function TreeNodeIcon( { type, vmStatus }: TreeNodeIconType) {  
  let className= (vmStatus) ? type +" "+ vmStatus : type;
  return (    
    <i className={className}>{className} - </i> 
  );
}

export default TreeNodeIcon;