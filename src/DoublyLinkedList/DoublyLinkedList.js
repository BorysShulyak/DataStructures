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

    isEmpty() {
        return this.count === 0
    }

    push(data) {
        const node = new Node(data)
        if(this.isEmpty()) {
            this.head = node
        }
        else {
            this.tail.next = node
            node.prev = this.tail
        }
        this.tail = node
        this.count ++
    }
    pop() {
        if (this.isEmpty()) return false

        const poppedNode = this.tail
        const newTail = this.tail.prev
        if(newTail !== null) {
            newTail.next = null
            this.tail = newTail
        }
        else {
            this.head = null
            this.tail = null
        }
        this.count--
        return poppedNode
    }

    unshift(data) {
        const node = new Node(data)
        const tempHead = this.head
        this.head = node
        if(this.isEmpty()) {
            this.tail = node
        }
        else {
            tempHead.prev = node
            node.next = tempHead
        }
        this.count ++
    }
    shift() {
        if(this.count === 0) return false

        const shiftedNode = this.head
        const newHead = this.head.next
        if(newHead !== null) {
            newHead.prev = null
            this.head = newHead
        }
        else {
            this.head = null
            this.tail = null
        }
        this.count--
        return shiftedNode
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
            if(this.count === 1) {
                this.head = null
                this.tail = null
            }
            //if current == tail
            if(current.next === null){
                current.prev.next = null
            }
            //if current == head
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

const doubleLinkedList = new DoublyLinkedList()
doubleLinkedList.push('111')
doubleLinkedList.push('222')
doubleLinkedList.push('333')
doubleLinkedList.push('555')
doubleLinkedList.push('666')
doubleLinkedList.push('777')
printStructure(doubleLinkedList)

doubleLinkedList.unshift('444')
console.log("unshift 444")
printStructure(doubleLinkedList)

doubleLinkedList.remove('222')
console.log("remove 222")
printStructure(doubleLinkedList)

doubleLinkedList.push('20')
console.log('push 20')
printStructure(doubleLinkedList)

doubleLinkedList.pop()
console.log('pop')
printStructure(doubleLinkedList)

doubleLinkedList.shift()
console.log('shift')
printStructure(doubleLinkedList)
