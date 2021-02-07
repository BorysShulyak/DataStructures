const bubbleSort = (array) => {
    const newArray = [...array]

    for(let i = 0; i < newArray.length - 1; i++) {
        for (let j = 0; j < newArray.length - i; j++) {
            if(newArray[j] > newArray[j + 1]) {
                const temp = newArray[j]
                newArray[j] = newArray[j + 1]
                newArray[j + 1] = temp
            }
        }
    }
    return newArray
}

console.log(bubbleSort([4, 5, 3, 6, 7, 10, 1]))
