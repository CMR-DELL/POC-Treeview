import * as React from 'react';
import TreeNode from './treenode';
import {TreeView} from './treetypes';


function Tree({ parent, nodes }: TreeView) {

  if(!nodes)  
    return <></>;
        
     
  return (
    <ul>
      {nodes.map((entry, index) =>(
        <TreeNode parent={parent} key={entry.id+index} data={entry} showChildren={entry.showChildren} />
      ))}
    </ul>
  );
}



export default Tree;