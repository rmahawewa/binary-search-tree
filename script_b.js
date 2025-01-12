// class Node{
//     constructor(data){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

function buildTree(array, start, end){
    if(start > end) return null;

    //find the mid value
    let mid = start + Math.floor((end - start)/2);

    let root = new Node(array[mid]);
    root.left = buildTree(array, start, (mid-1));
    root.right = buildTree(array, (mid+1), end);

    return root;
}

function inorder(root){
    if(root !== null){
        inorder(root.left);
        console.log(root.data + " ");
        inorder(root.right);
    }
}

function postorder(root){
    if(root !== null){
        postorder(root.left);
        postorder(root.right);
        console.log(root.data + " ");
    }
}

function preorder(root){
    if(root !== null){
        console.log(root.data + " ");
        preorder(root.left);
        preorder(root.right);
    }
}

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

function countLeaves(root){
    //if the root is null return 0
    if(root === 0){
        return 0;
    }

    //if the node has no left or right child it is a leaf
    if(root.left === null || root.right === null){
        return 1;
    }

    //recursively count the leaves in the left and right subtrees
    return countLeaves(root.left) + countLeaves(root.right);
}

function create_binary_tree(){
    let array = [10,15,12,11,14,30,25,35,20,40,33];
    let root = Node();
    root = buildTree(array, 0, 10);

    let isBalanced = isBalanced(root);
    
    //print tree inorder, postorder, preorder
    inorder(root);
    postorder(root);
    preorder(root);

    let new_array = [200, 40, 38, 89, 90];
    array.concat(new_array);
    root = buildTree(array, 0, 15);


    let isBalancedNew = isBalanced(root);
    let array1 = [];
    let check = postOrderTraversal(isBalancedNew, array1);
    let arr_length = check.length;

    //get number of leaf nodes
    let leaf_node_count = countLeaves(root);

    //if the count of leaf nodes is a multiple of 2 the tree is a balanced tree
    if(leaf_node_count % 2 !== 0){
        array.push(50); // now the tree is a balanced tree
    }

    root = buildTree(array, 0, 16);
    isBalancedNew = isBalanced(root);

    levelOrderTraversal(root);
    inorder(root);
    postorder(root);
    preorder(root);
}