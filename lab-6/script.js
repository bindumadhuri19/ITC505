// script.js
document.getElementById('sortButton').addEventListener('click', function() {
    // Array to be sorted
    var numbers = [8, 3, 6, 2, 9, 1, 5, 4, 7];

    // Call bubble sort function
    bubbleSort(numbers);

    // Display sorted numbers
    var output = document.getElementById('output');
    output.textContent = 'Sorted Numbers: ' + numbers.join(', ');
});

// Bubble Sort function
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
