export interface TreeView {
    nodes?: NodeInfo[];
}

export interface TreeType {
    data: NodeInfo;    
}

export interface TreeNodeIconType {
    type: string;
    vmStatus?:string;
}

export interface CheckboxType {
    checked: boolean;
    indeterminate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    onNodeCheck: (e:React.ChangeEvent<Element>) => void;
  }

export interface NodeInfo
{
    id: number, 
    name: string,
    checkStatus:CheckboxType,
    icon:TreeNodeIconType
    children?: NodeInfo[],
}
