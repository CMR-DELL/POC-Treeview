import React from 'react';
import TreeNode from './treenode';
import {TreeView} from './treetypes';


function Tree({ nodes }: TreeView) {

  if(!nodes)  
    return <></>;
        
    
   
  return (
    <ul>
      {nodes.map((entry, index) =>(
        <TreeNode key={entry.id} data={entry} showChildren={entry.showChildren} />
      ))}
    </ul>
  );
}



export default Tree;