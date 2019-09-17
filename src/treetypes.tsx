export interface TreeView {
    nodes?: NodeInfo[];
}

export interface TreeType {
    data: NodeInfo;    
    showChildren?: boolean;
}

export interface TreeNodeIconType {
    type: number;
    vmStatus?:boolean;
}

export interface CheckboxType {
    checked: boolean;    
    disabled?: boolean;
    onNodeCheck: (e:React.ChangeEvent<Element>) => void;
  }

export interface ExpandCollapseType{
    Opened?:boolean
    onClick: (e:React.ChangeEvent<Element>) => void;
}

export interface NodeInfo
{
    id: number;
    name: string;
    isRunning?: any;//to remove
    currentCheckedState: string;//to remove
    level: number;    
    child?: NodeInfo[],
    showChildren?:boolean,
    //checkStatus:CheckboxType,
    // icon:TreeNodeIconType,
    // showChildren:boolean,
       
}


export interface TreeNode {
    id: number;
    name: string;
    isRunning?: any;    
    nodeType: string;
    currentCheckedState: string;
    child: NodeInfo[];
}
export interface TreeInfo {
    id: number;
    nodeType: number;
    projectId: number;
    treeNodes: TreeNode[];
    documentVersion: string;
}