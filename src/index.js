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
