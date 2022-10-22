const array = [1, 5, 11, 34, 36, 45, 51, 75, 81, 101, 105, 106, 201, 205, 300, 998, 1001];

function binary_search(arr, numberToFind) {
    let mid, guess;
    let numberOfTries = 0;
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        guess = arr[mid];
        numberOfTries++;

        if (guess > numberToFind) {
            high = mid - 1;
        } else if (guess < numberToFind) {
            low = mid + 1;
        } else {
            console.log(`Found after: ${numberOfTries} tries`);
            console.log(`Found number! It is: ${guess}`);
            return guess;
        }
    }
    console.log('Not found number, which you are search!')
}

binary_search(array, 101);