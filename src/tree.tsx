import React, { useState } from 'react';
import TreeNode from './treenode';
import {TreeView, NodeInfo} from './treetypes';


function Tree({ nodes }: TreeView) {

  if(!nodes)  
    return <></>;
        
    
   
  return (
    <ul>
      {nodes.map((entry, index) =>(
        <TreeNode key={entry.id} data={entry} />
      ))}
    </ul>
  );
}



export default Tree;