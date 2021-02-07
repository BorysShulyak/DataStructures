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
}

const tree = new BST(12)
tree.insert(5)
tree.insert(8)
tree.insert(2)
tree.insert(12)
tree.insert(1)

console.log(tree)


