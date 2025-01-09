class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(array, root){
        this.root = buildTree(array);
        this.array = array;
        this.start = 0;
        this.end = array.length - 1;
    }

    buildTree(){
        let array = this.array;
        let start = this.start;
        let end = this.end;

        let sorted_array = array.sort();

        if(start > end) return null;

        //find the mid value
        let mid = start + Math.floor((end - start)/2);

        let root = new Node(array[mid]);
        root.left = buildTree(array, start, (mid-1));
        root.right = buildTree(array, (mid+1), end);

        return root;

    }

}

