class Node{
    constructor(data){
        this.data = data;
        this.leftc = null;
        this.rightc = null;

    }

    /**
   * insert into the binary tree
   */
  insert(root, key){
    if(root === null){
        return new Node(key);
    }

    //Duplicates not allowed
    if(root.data === key){
        return root;
    }

    if(key < root.data){
        root.leftc = this.insert(root.leftc, key);
    }else if(key > root.key){
        root.rightc = this.insert(root.rightc, key);
    }

    return root;
  }

  findValue(root, value){
    // let value = "";
    while(root !== null && root.data !== value){
        if(root.data == value){
            return root;
        }
        findValue(root.leftc, value);
        findValue(root.rightc, value);
    }
    return null;
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

  /***
   * inorder tree traversal
   */
  function inorder(root){
      if(root !== null){
          inorder(root.leftc);
          console.log(root.data + " ");
          inorder(root.rightc);
      }
  }

  let root = new Node(50);
  root = root.insert(root, 80); 
  root = root.insert(root, 30);
  root = root.insert(root, 20);
  root = root.insert(root, 40);
  root = root.insert(root, 70);
  root = root.insert(root, 60);
   

  //print inorder traversal of the BST
  inorder(root);
  prettyPrint(root);


  /***
   * Delete a given node
   * 
   * 
   * It mainly works when the right child is not empty, which is  the case we need in BST delete.
   */
  function getSuccessor(curr){
    curr = curr.rightc;
    while(curr !== null && curr.leftc !== null){
        curr = curr.leftc;
    }
    return curr;
  }


  /***
   * This function deletes a given key x from the given BST and returns the modified root of the BST (if it is modified).
   */
  function delNode(root, x) {
    //base case
    if(root === null){
        return root;
    }

    //if key to be searched is in a subtree
    if(root.data > x){
        root.leftc = delNode(root.leftc, x);
    }else if(root.data < x){
        root.rightc = delNode(root.rightc, x);
    }else{
        if(root.leftc === null) {return root.leftc;};
        if(root.rightc === null){return root.rightc};

        //when both children are present
        let succ = getSuccessor(root);
        root.data = succ.key;
        root.rightc = delNode(root.rightc, succ.key);
    }
    return root;

  }

   // Utility function to do inorder traversal
    function inorder(root) {
        if (root !== null) {
            inorder(root.leftc);
            console.log(root.data + " ");
            inorder(root.rightc);
        }
    }


    //Driver code
    let root_new = new Node(10);
    root_new.left = new Node(5);
    root_new.right = new Node(15);
    root_new.right.left = new Node(12);
    root_new.right.right = new Node(18);
    let x = 15;

    root_new = delNode(root_new, 15);
    console.log(root_new);
    inorder(root_new);
    console.log(root_new);
    // prettyPrint(root_new); 


    


    function levelOrderTraversal(root){
        if(root === null) return;
    
        let queue = [root];
    
        while(queue.length > 0){
            let current = queue.shift();
    
            //visit the root node
            console.log(current.data + " ");
    
            //Enqueue left child
            if(current.left !== null){
                queue.push(current.left);
            }
    
            //Enqueue right child
            if(current.right !== null){
                queue.push(current.right);
            } 
        }
    }

    /**
     * in order traversal
     */

    function inOrderTraversal(root, array){
        if(root === null){
            return array;
        }

        //traverce the left sub tree
        inOrderTraversal(root.left, array);

        console.log(root.data + " ");
        array.push(root.data);

        //traverse the right subtree
        inOrderTraversal(root.right, array);

    }


    /**
     * pre order traversal
     */

    //in pre-order traversal, the node is visited first, followed by its left child and then its right child. This can be visualized as Root-Left-Right.

    function preOrderTraversal(root, array){
        if(root === null) return array;

        //visit the root node
        console.log(root.data + " ");
        array.push(root.data);

        //Traverse the left subtree
        preOrderTraversal(root.left, array);

        //Traverse the right subtree
        preOrderTraversal(root.right, array);

    }

    function postOrderTraversal(root, array){
        if(root === null){
            return array;
        }
    
        //Traverse the left subtree
        postOrderTraversal(root.left, array);
         
        //Traverse the right subtree
        postOrderTraversal(root.right, array);
    
        //Visit the root node
        console.log(root.data + " ");
        array.push(root.data);
    }


