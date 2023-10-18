function firstChar(inputString) {
    // Remove leading and trailing spaces using trim()
    inputString = inputString.trim();

    // Check if the string is empty or contains only spaces
    if (inputString === '') {
        return '';
    }

    // Return the first character of the cleaned string
    return inputString[0];
}

// Test cases
console.log(firstChar(' Rosa Parks '));  // Output: 'R'
console.log(firstChar(' Hello World '));  // Output: 'H'
console.log(firstChar(' '));  // Output: ''
console.log(firstChar(''));  // Output: ''
