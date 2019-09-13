export interface TreeView {
    data?: NodeInfo[];
}

export interface TreeNodeType {
    data: NodeInfo;
}

export interface TreeNodeIconType {
    type: string;
    vmStatus?:string;
}

export interface NodeInfo
{
    id: number, 
    name: string,
    icon:TreeNodeIconType
    children?: NodeInfo[],
}
