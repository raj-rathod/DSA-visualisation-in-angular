export class Node{
    data: string| null;
    previous:any;
    next:any;

    constructor(data: string | null = null){
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}