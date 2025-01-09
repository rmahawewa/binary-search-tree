class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(array){
        this.array = array;
        this.start = 0;
        this.end = array.length - 1;
        this.root = ""        
    }

    buildTree(array, start, end){
        // let array = this.array;
        // let start = this.start;
        // let end = this.end;

        let sorted_array = array.sort();

        if(start > end) return null;

        //find the mid value
        let mid = start + Math.floor((end - start)/2);

        let root = new Node(sorted_array[mid]);
        root.left = buildTree(sorted_array, start, (mid-1));
        root.right = buildTree(sorted_array, (mid+1), end);

        return root;

    }

}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 
  let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  let tree = new Tree(array);
  let root = tree.buildTree(array,0,13);
  prettyPrint(root);
