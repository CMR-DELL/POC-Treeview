import React,{useState} from 'react';
import Tree from './tree';
import Icon from './icon';
import Checkbox from './checkbox';
import {TreeType, NodeInfo} from './treetypes';

function useForceUpdate(){
  const [value, set] = useState(true); //boolean state
  return () => set(value => !value); // toggle the state to force render
}

function TreeNode({ data }: TreeType) {  
  const [nodeInfo, setNodeInfo] = useState(data);
  const forceUpdate = useForceUpdate();

  function setAllChildrenCheckStatus(node : NodeInfo, status:boolean){
    if(node.children){
      node.children.forEach(element => {
        element.checkStatus.checked=status;
        setAllChildrenCheckStatus(element,status)
      });
    }
  }

  function handleNodeCheck(node:NodeInfo){   
    var currentStatus=!node.checkStatus.checked;    

    node.checkStatus.checked = currentStatus;
    setAllChildrenCheckStatus(node, currentStatus);     
        
    setNodeInfo(node);
    forceUpdate();
  }

 


  return (
    <li>
      <Checkbox checked={nodeInfo.checkStatus.checked}  onNodeCheck={e => {        
        if (handleNodeCheck) {
          handleNodeCheck(nodeInfo);
        }
      }} />      
      <Icon type={nodeInfo.icon.type} vmStatus={nodeInfo.icon.vmStatus} />
      { nodeInfo.name }
      <Tree nodes={nodeInfo.children} />
    </li>
  );  

 
}

export default TreeNode;