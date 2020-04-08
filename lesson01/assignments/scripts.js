// jQuery Doc Ready
$(function () {
    // Set up some data and variables
    const data = [1, 2, 3, 4];

    // Click event on the submit input
    $('#reduce').on('click', function () {
        // Grab the input value and parse it into a number
        const val = $(this).siblings().val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            data.push(num);
            // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
            const sum = data.reduce((acc, curr) => acc + curr);
            // Add our new total to the page
            $('.sum').text(sum);
            // Reset the input value to an empty string
            $(this).siblings().val('');
            //show the current array
            $('#currentArray').text(`The array now is ${data}`);
        }
    });
    $('#filter').on('click', function () {
        // Grab the input value and parse it into a number
        const val = $(this).siblings().val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            data.push(num);
            // Use filter to get a new array which value all greater than 2
            let resultArray = data.filter(value => value > 2);
            let newArray = resultArray.toString();
            // Show our result to the page
            $('.filter-result').text(newArray);
            // Reset the input value to an empty string
            $(this).siblings().val('');
            //show the current array
            $('#currentArray').text(`The array now is ${data}`);
        }
    });
    $('#find').on('click', function () {
        // Grab the input value and parse it into a number
        const val = $(this).siblings().val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            data.push(num);
            // Use find to find out the first element which greater than 40
            let result = data.find(value => value > 40);
            // Show our result to the page
            $('.find-result').text(result);
            // Reset the input value to an empty string
            $(this).siblings().val('');
            //show the current array
            $('#currentArray').text(`The array now is ${data}`);
        }
    });
    $('#some').on('click', function () {
        // Grab the input value and parse it into a number
        const val = $(this).siblings().val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            data.push(num);
            // Use some to find out if there are any element greater than 6
            let result = data.some(value => value > 6);
            // Show our result to the page
            $('.some-result').text(result);
            // Reset the input value to an empty string
            $(this).siblings().val('');
            //show the current array
            $('#currentArray').text(`The array now is ${data}`);
        }
    });
});
