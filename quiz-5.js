`Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0.`

module.exports = function sumOfDifferences(arr) {
// checking if arry length is more than 2 then we have to return if the arry is empty
    if (arr.length < 2) {
        return 0;
    }
    //
    arr = arr.sort((a, b) => a - b)
    let difArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let diff = Math.abs(arr[i] - arr[i + 1])
        difArr.push(diff)
    }
    return difArr.reduce((p, n) => p + n)
};



  


