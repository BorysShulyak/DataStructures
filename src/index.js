const print = (structure) => {
    let elements = []
    for (let item of doubleLinkedList) {
        elements.push(item)
    }
    return elements
}

const doubleLinkedList = new DoublyLinkedList()
doubleLinkedList.push('111')
doubleLinkedList.push('222')
doubleLinkedList.push('333')
doubleLinkedList.push('555')
doubleLinkedList.push('666')
doubleLinkedList.push('777')
console.log(print(doubleLinkedList))

doubleLinkedList.unshift('444')
console.log("unshift 444")
console.log(print(doubleLinkedList))

doubleLinkedList.remove('222')
console.log("remove 222")
console.log(print(doubleLinkedList))

doubleLinkedList.push('20')
console.log('push 20')
console.log(print(doubleLinkedList))

doubleLinkedList.pop()
console.log('pop')
console.log(print(doubleLinkedList))

doubleLinkedList.shift()
console.log('shift')
console.log(print(doubleLinkedList))
