class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;

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
        root.left = this.insert(root.left, key);
    }else if(key > root.data){
        root.right = this.insert(root.right, key);
    }

    return root;
  }

  findValue(root, value){
    // let value = "";
    while(root !== null && root.data !== value){
        if(root.data == value){
            return root;
        }
        findValue(root.left, value);
        findValue(root.right, value);
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
    root.left = buildTree(array, start, (mid-1));
    root.right = buildTree(array, (mid+1), end);

    return root;
}

let rootnode = buildTree(array, 0, (array.length-1));

console.log(rootnode);

let node = new Node(123);

const prettyPrint = (node="", prefix = "", isLeft = true) => {
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
 
  prettyPrint(rootnode);  

  /***
   * inorder tree traversal
   */
  function inorder(root){
      if(root !== null){
          inorder(root.left);
          console.log(root.data + " ");
          inorder(root.right);
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
    curr = curr.right;
    while(curr !== null && curr.left !== null){
        curr = curr.left;
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
        root.left = delNode(root.left, x);
    }else if(root.data < x){
        root.right = delNode(root.right, x);
    }else{
        if(root.left === null) {return root.left;};
        if(root.right === null){return root.right};

        //when both children are present
        let succ = getSuccessor(root);
        root.data = succ.key;
        root.right = delNode(root.right, succ.key);
    }
    return root;

  }

   // Utility function to do inorder traversal
    function inorder(root) {
        if (root !== null) {
            inorder(root.left);
            console.log(root.data + " ");
            inorder(root.right);
        }
    }


    //Driver code
    let root_new = new Node(10);
    root_new.left = new Node(5);
    root_new.right = new Node(15);
    root_new.right.left = new Node(12);
    root_new.right.right = new Node(18);
    let x = 15;

    // root_new = delNode(root_new, 15);
    console.log(root_new);
    inorder(root_new);
    console.log(root_new);
    prettyPrint(root_new); 
    root_new = delNode(root_new, 15);
    console.log(root_new);


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
        return root;
    }

    /**
     * in order traversal
     */

    function inOrderTraversal(root, array){
        if(root === null){
            return array;
        }else{
            //traverce the left sub tree
            inOrderTraversal(root.left, array);

            console.log(root.data + " ");
            array.push(root.data);

            //traverse the right subtree
            inOrderTraversal(root.right, array);
        }

        return array;
    }


    /**
     * pre order traversal
     */

    //in pre-order traversal, the node is visited first, followed by its left child and then its right child. This can be visualized as Root-Left-Right.

    function preOrderTraversal(root, array){
        if(root === null) {
            return array;
        }else{
            //visit the root node
            console.log(root.data + " ");
            array.push(root.data);

            //Traverse the left subtree
            preOrderTraversal(root.left, array);

            //Traverse the right subtree
            preOrderTraversal(root.right, array);
        }     
        return array;
    }


    function postOrderTraversal(root, array){
        if(root === null){
            return array;
        }else{
            //Traverse the left subtree
            postOrderTraversal(root.left, array);
                    
            //Traverse the right subtree
            postOrderTraversal(root.right, array);

            //Visit the root node
            console.log(root.data + " ");
            array.push(root.data);
        }
    
        return array;
    }

    function find_height(root,count = 0){
        
        if(root === null) return;
    
        let queue = [root];
    
        while(queue.length > 0){
            let current = queue.shift();
            count++;
    
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
        return count;
    }

    function depth(root, target, array){
        if(root === null){
            return array.length;
        }else if(root == target){
            return array.length;
        }else{
            //traverce the left sub tree
            depth(root.left, target, array);

            array.push(root.data);

            //traverse the right subtree
            depth(root.right, target, array);
        }
        return array.length;     

    }

    function isBalanced(root){
        let count_left = 0;
        function left_side(root){
            if(root === null) {
                return 0;
            }else{
                count_left++;
                left_side(root.left.left);
                left_side(root.left.right);
            }
            return count_left;
        }

        function right_side(root){
            let count_right = 0;
            if(root === null) {
                return 0;
            }else{
                count_right++;
                right_side(root.right.left);
                right_side(root.right.right);
            }
            return count_right;
        }
        let count_difference = left_side(root).count_left - right_side(root).count_right;
        let balanced_tree = count_difference <= 1 ? true : false;
        return balanced_tree;
    }


function build_a_tree(){
    // In a Binary Tree with N nodes, the minimum possible height or the minimum number of levels is Log2(N+1):
    // The maximum number of nodes at level ‘l’ of a binary tree is 2(pov)l


    let array = [10,15,12,11,14,30,25,35,20,40,33];
    let lenth_of_array = array.length;  //11
    let array1 = [50,60,34,55];
    let lenth_of_array1 = array.length;  //4
    array = array.concat(array1);
    lenth_of_array = array.length;  //15
    let number_of_levels = 16; //Log2(N+1); //log2(15+1) = log2(16) = 4  => since 4 is a round number I guess the binary tree will be a balanced tree

    let node = buildTree(array, 10, 55);

    let check = postOrderTraversal(node, array1);


}
    