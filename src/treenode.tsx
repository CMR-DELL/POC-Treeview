import * as React from 'react';
import Tree from './tree';
import Icon from './icon';
import Checkbox from './checkbox';
import ExpandCollapse from './expandcollapse';
import {TreeType,TreeNodeInfo} from './treetypes';
import { useState } from 'react';

function useForceUpdate(){
  const [value, set] = useState(true); //boolean state
  return () => set(value => !value); // toggle the state to force render
}

function TreeNode({parent, data }: TreeType) {  
  const [nodeInfo, setNodeInfo] = useState(data);
  const forceUpdate = useForceUpdate();

  function getCheckboxStatus(status:boolean){
    return (status) ? 'Checked' : 'UnChecked';  
  }

  function setAllChildrenCheckStatus(node : TreeNodeInfo, status:boolean){    
    if(node.child){
      node.child.forEach(element => {        
        element.currentCheckedState=getCheckboxStatus(status);
        setAllChildrenCheckStatus(element,status);       
      });
    }
  }

  function handleNodeCheck(node:TreeNodeInfo){  
    console.log(node);
    var currentStatus=(node.currentCheckedState==='UnChecked' || node.currentCheckedState==='PartialCheck');
    
    node.currentCheckedState=getCheckboxStatus(currentStatus);
    setAllChildrenCheckStatus(node, currentStatus);     
       
    setNodeInfo(node);
    forceUpdate();
  }

  function setChildrenVisible(node:TreeNodeInfo){
    var currentStatus=!node.showChildren;
      node.showChildren = currentStatus;
          
      setNodeInfo(node);
      forceUpdate();
  }
  function getClassName(){
    var cssClass='expand';
    if(parent)
    {
      cssClass=(parent.showChildren)?"expand":"collapse";
    }
    return cssClass;
  }
  
  return (
    <li className={getClassName()}>
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
      <Icon type={nodeInfo.nodeType} vmStatus={nodeInfo.isRunning} />
      { nodeInfo.name }
      <Tree parent={nodeInfo} nodes={nodeInfo.child} />
    </li>
  );  

 
}

export default TreeNode;