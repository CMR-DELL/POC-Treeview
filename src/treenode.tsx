import React,{useState} from 'react';
import Tree from './tree';
import Icon from './icon';
import Checkbox from './checkbox';
import ExpandCollapse from './expandcollapse';
import {TreeType, NodeInfo} from './treetypes';

function useForceUpdate(){
  const [value, set] = useState(true); //boolean state
  return () => set(value => !value); // toggle the state to force render
}

function TreeNode({ data }: TreeType) {  
  const [nodeInfo, setNodeInfo] = useState(data);
  const forceUpdate = useForceUpdate();

  function getCheckboxStatus(status:boolean){
    return (status) ? 'Checked' : 'UnChecked';  
  }

  function setAllChildrenCheckStatus(node : NodeInfo, status:boolean){    
    if(node.child){
      node.child.forEach(element => {        
        element.currentCheckedState=getCheckboxStatus(status);
        setAllChildrenCheckStatus(element,status);       
      });
    }
  }

  function handleNodeCheck(node:NodeInfo){  
    console.log(node);
    var currentStatus=(node.currentCheckedState==='UnChecked' || node.currentCheckedState==='PartialCheck');
    
    node.currentCheckedState=getCheckboxStatus(currentStatus);
    setAllChildrenCheckStatus(node, currentStatus);     
       
    setNodeInfo(node);
    forceUpdate();
  }

  function setChildrenVisible(node:NodeInfo){
    var currentStatus=!node.showChildren;
      node.showChildren = currentStatus;
          
      setNodeInfo(node);
      forceUpdate();
  }

  return (
    <li>
      <ExpandCollapse Opened={nodeInfo.showChildren} onClick={e => {        
        if (handleNodeCheck) {
          setChildrenVisible(nodeInfo);
        }
      }} />
      <Checkbox checked={nodeInfo.currentCheckedState==='Checked'}  onNodeCheck={e => {        
        if (handleNodeCheck) {
          handleNodeCheck(nodeInfo);
        }
      }} />      
      <Icon type={nodeInfo.level} vmStatus={nodeInfo.isRunning} />
      { nodeInfo.name }
      <Tree nodes={nodeInfo.child} />
    </li>
  );  

 
}

export default TreeNode;