const doubleLinkedList = new DoublyLinkedList()
doubleLinkedList.add('111')
doubleLinkedList.add('222')
doubleLinkedList.add('333')
doubleLinkedList.unshift('444')
doubleLinkedList.remove('333')
for (let item of doubleLinkedList) {
    console.log(item)
}
