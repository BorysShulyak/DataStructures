class Node_FullBT {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class FullBinaryTree {
    constructor(data) {
        this.root = new Node_FullBT(data)
    }

    isFullBinaryTree(node = this.root) {
        if(node === null)
            return true

        if(node.left === null && node.right === null)
            return true

        if(node.left !== null && node.right !== null)
            return this.isFullBinaryTree(node.left) && this.isFullBinaryTree(node.right)

        return false
    }
}

const fullTree = new FullBinaryTree(1);
fullTree.root.left = new Node_FullBT(2);
fullTree.root.right = new Node_FullBT(3);
fullTree.root.left.left = new Node_FullBT(4);
fullTree.root.left.right = new Node_FullBT(5);
fullTree.root.right.left = new Node_FullBT(6);
fullTree.root.right.right = new Node_FullBT(7);

console.log(fullTree.root)
console.log("isFullBT == ", fullTree.isFullBinaryTree())
