class Node{
    constructor(data){
        this.data = data;
        this.leftc = null;
        this.rightc = null;

    }

}

class Tree{
    constructor(buildTree){
        this.root = buildTree;
    }
}

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let sorted_nums = array.sort(function(a,b){return a-b});

function buildTree(array, start, end){
    if(start > end) return null;

    //find the mid value
    let mid = start + Math.floor((end - start)/2);

    let root = new Node(array[mid]);
    root.leftc = buildTree(array, start, (mid-1));
    root.rightc = buildTree(array, (mid+1), end);

    return root;
}

let rootnode = buildTree(array, 0, (array.length-1));

console.log(rootnode);

let node = new Node(123);

const prettyPrint = (node="", prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.rightc !== null) {
      prettyPrint(node.rightc, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.leftc !== null) {
      prettyPrint(node.leftc, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 
  prettyPrint(rootnode);