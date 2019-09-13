import * as React from 'react';
import Tree from './tree';
import Icon from './treeicon';
import {TreeNodeType,TreeNodeIconType} from './treetypes';

function TreeNode({ data }: TreeNodeType) {
  

  return (
    <li>
      <Icon type={data.icon.type} vmStatus={data.icon.vmStatus} />
      { data.name }        
          <Tree data={data.children}  />        
    </li>  
  );
}

export default TreeNode;