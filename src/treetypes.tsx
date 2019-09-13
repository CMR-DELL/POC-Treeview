export interface TreeView {
    data?: NodeInfo[];
}

 export interface TreeNodeType {
    data: NodeInfo;
}
  
export interface NodeInfo
{
    id: number, 
    name: string,
	nodeType: string,
    children: NodeInfo[],
}
