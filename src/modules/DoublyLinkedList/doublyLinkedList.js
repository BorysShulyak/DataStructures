class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.count = 0
    }

    add(data) {
        const node = new Node(data)
        if(this.head === null) {
            this.head = node
        }
        else {
            this.tail.next = node
            node.prev = this.tail
        }
        this.tail = node
        this.count ++
    }
    unshift(data) {
        const node = new Node(data)
        const tempHead = this.head
        node.next = tempHead
        this.head = node
        if(this.tail === null) {
            this.tail = this.head
        }
        else {
            tempHead.prev = node
        }
        this.count ++
    }
    remove(data) {
        let current = this.head
        while(current !== null){
            if(deepEqual(current.data, data)){
                break
            }
            current = current.next
        }
        if(current !== null) {
            if(current.next === null){
                current.prev.next = null
            }
            else if(current.prev === null){
                current.next.prev = null
            }
            else {
                current.prev.next = current.next
                current.next.prev = current.prev
            }
            this.count--
            return true
        }
        return false
    }
    [Symbol.iterator] = () => ({
        current: this.head,
        next() {
            if(this.current !== null){
                const element = this.current
                this.current = this.current.next
                return {done: false, value: element.data}
            }
            else {
                return {done: true}
            }
        }
    })
}
