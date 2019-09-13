import * as React from 'react';
import Tree from './tree';
import {NodeInfo, TreeNodeType} from './treetypes';

function TreeNode({ data }: TreeNodeType) {
  
  return (
    <li>{ data.name }        
          <Tree data={data.children}  />        
    </li>  
  );
}

export default TreeNode;