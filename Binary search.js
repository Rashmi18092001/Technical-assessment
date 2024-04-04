// arr will store sorted array and num will store the value to find in sorted array
function binarySearchAlgo(arr, num) {

    // sorting the array
    arr.sort((a, b) => a - b);
    console.log('Sorted array : ', arr)

    // left variable will store left number from sorted array which have 0 index
    let left = 0;

    // left variable will store right number from sorted array which have last index
    let right = arr.length - 1;

    while (left <= right) {

        // dividing the array to find middle index
        let mid = Math.floor((left + right) / 2);

        // if middle element is num which is to be found 
        if (arr[mid] === num) {
            return mid; 
        } 

        // if element is greater it will search in right part
        else if (arr[mid] < num) {
            left = mid + 1; 
        } 

        // if element is greater it will search in left part
       else {
            right = mid - 1; 
        }
    }

    // if element is not found in the array it will return -1
    return -1; 
}

const arr = [7,54,23,0,8,69,54];
const num = 54
const index = binarySearchAlgo(arr, num);
console.log("Index of", num, "is", index);
