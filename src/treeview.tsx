import React from 'react';
import Tree from './tree';
import datafile from './data.json';
  

function TreeView() {
 

	return (
		<Tree nodes={datafile.treeNodes}   />
  );
}



export default TreeView;