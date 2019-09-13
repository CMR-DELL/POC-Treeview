import React from 'react';
import Tree from './tree';
import './App.css';
import {NodeInfo} from './treetypes';



const App: React.FC = () => {
	let data= [{id:0, name:"aaa", children:[{id:2, name:"a1aa" },{id:3, name:"a2aa" }] },{id:1, name:"bbb"}] as  NodeInfo[];
	return (
		<Tree data={data} />
	);
}

export default App;
