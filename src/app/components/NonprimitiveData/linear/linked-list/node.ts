export class Node{
    data: string| null;
    previous: Node | null;
    next: Node | null;

    constructor(data: string | null = null){
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}