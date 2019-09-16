import React from 'react';
import Tree from './tree';
import {NodeInfo} from './treetypes';

let data= [
  {id:0, name:"aaa",checkStatus:{checked:true}, icon:{type:"datacenter"},  
    children:[    
      {id:1, name:"aaa",checkStatus:{checked:true}, icon:{type:"cluster"}, 
        children:[
          {id:2, name:"a1aa",checkStatus:{checked:true},icon:{type:"vm",vmStatus:"running"}},
          {id:3, name:"a2aa",checkStatus:{checked:true},icon:{type:"vm",vmStatus:"suspended"}}
        ]
    }]},
   {id:4, name:"bbb", checkStatus:{checked:false}, icon:{type:"hypervisor"}}
  ] as  NodeInfo[];   

function TreeView() {
 

	return (
		<Tree nodes={data}   />
  );
}



export default TreeView;