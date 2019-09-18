export interface TreeView {
    nodes?: TreeNodeInfo[];
    parent?:TreeNodeInfo;
}

export interface TreeType {
    parent?:TreeNodeInfo;
    data: TreeNodeInfo;    
    showChildren?: boolean;
}

export interface TreeNodeIconType {
    type: string;
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


export interface TreeNodeInfo {
    id: number;
    name: string;
    isRunning?: any;    
    nodeType: string;
    currentCheckedState: string;
    child: TreeNodeInfo[];
    showChildren:boolean,
}
export interface TreeInfo {
    id: number;
    nodeType: number;
    projectId: number;
    treeNodes: TreeNodeInfo[];
    documentVersion: string;
}