function findSmallest(arr) {
    let smallestValue = arr[0];
    let smallestIndex = 0;

    for (const [index, value] of arr.entries()) {
        if (value < smallestValue) {
            smallestValue = value;
            smallestIndex = index;
        }
    }

    return smallestIndex;
}

function findBiggest(arr) {
    let biggestValue = arr[0];
    let biggestIndex = 0;

    for (const [index, value] of arr.entries()) {
        if (value > biggestValue) {
            biggestValue = value;
            biggestIndex = index;
        }
    }

    return biggestIndex;
}

function selectionSort(arr, ascending = true) {
    const newArray = [];
    const numberOfElements = arr.length;

    for (let i = 0; i < numberOfElements; i++) {
        const findIndex = ascending ? findSmallest(arr) : findBiggest(arr);
        newArray.push(...arr.splice(findIndex, 1));
    }

    return newArray;
}

console.log(selectionSort([10, 5, 9, 6, 1, 3, 4, 8]));