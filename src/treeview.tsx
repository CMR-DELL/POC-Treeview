import * as React from 'react';
import Tree from './tree';
import datafile from './data.json';
  

function TreeView() {
 

	return (
    <div className="tree">      
        <Tree nodes={datafile.treeNodes}   />      
    </div>
  );
}



export default TreeView;