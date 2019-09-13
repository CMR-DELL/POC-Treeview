import React from 'react';
import Tree from './tree';
import './App.css';
import {NodeInfo} from './treetypes';



const App: React.FC = () => {
	let data= [
		{id:0, name:"aaa",icon:{type:"cluster"}, 
		children:[
			{id:2, name:"a1aa",icon:{type:"vm",vmStatus:"running"} },
			{id:3, name:"a2aa",icon:{type:"vm",vmStatus:"suspended"}}]
		 },
		 {id:1, name:"bbb", icon:{type:"hypervisor"}}
		] as  NodeInfo[];
	return (
		<Tree data={data} />
	);
}

export default App;
