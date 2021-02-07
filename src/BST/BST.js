class Node_BST {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(data) {
        const node = new Node_BST(data)

        if(this.root === null) {
            this.root = node
            return this
        }

        let currentNode = this.root
        const insertSide = (side) => {
            if(!currentNode[side]) {
                currentNode[side] = node
                return this
            }
            currentNode = currentNode[side]
        }
        while(true) {
            if(data === currentNode.data) return this
            if(data < currentNode.data) insertSide('left')
            else insertSide('right')
        }
    }

    BFS() {
        const visited =[], queue = []

        queue.push(this.root)
        while (queue.length !== 0) {
            let current = queue.shift()
            visited.push(current.data)

            if(current.left !== null) queue.push(current.left)
            if(current.right !== null) queue.push(current.right)
        }

        return visited
    }

    preOrder() {
        const visited = []

        const traverse = node => {
            visited.push(node.data)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }

        traverse(this.root)
        return visited
    }

    postOrder() {
        const visited = []

        const traverse = node => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            visited.push(node.data)
        };

        traverse(this.root)
        return visited
    }

    inOrder() {
        let visited = []

        const traverse = node => {
            if (node.left) traverse(node.left)
            visited.push(node.data)
            if (node.right) traverse(node.right)
        };

        traverse(this.root)
        return visited
    }
}

const tree = new BST(12)
tree
    .insert(20)
    .insert(14)
    .insert(57)
    .insert(9)
    .insert(19)
    .insert(31)
    .insert(62)
    .insert(3)
    .insert(11)
    .insert(72)


console.log("BFS ",tree.BFS())
console.log("preOrder ",tree.preOrder())
console.log("postOrder ",tree.postOrder())
console.log("inOrder ",tree.inOrder())


