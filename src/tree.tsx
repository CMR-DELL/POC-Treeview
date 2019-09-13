import * as React from 'react';
import TreeNode from './treenode';
import {TreeView} from './treetypes';


function Tree({ data }: TreeView) {
  if(!data)  
    return <></>;
    
  return (
    <ul>
      {data.map((entry, index) =>(
        <TreeNode data={entry} />
      ))}
    </ul>
  );
}

export default Tree;