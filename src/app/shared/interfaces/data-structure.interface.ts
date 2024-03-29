import { CodeHighLight } from "./code-highlight.interface";

export interface DS{
     defination: string;
     properties: string;
     example: string;
     operations: string;
     advantage: string;
     disadvantage: string;
     type?: string;
     algorithms?: string;
     applications?: string;
     memoryRepresentation?: string;
     terminologies?: string;
     other?: string;
     souurceCode?:CodeHighLight;
}