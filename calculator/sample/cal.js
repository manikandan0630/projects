document.getElementById('submit').addEventListener('click', function(e) {
    // Get values from input fields
    e.preventDefault()
    var val1 = parseFloat(document.getElementById('val1').value);
    var val2 = parseFloat(document.getElementById('val2').value);
    var operation = document.getElementById('operation').value;
    var result;

    // Perform the selected operation
    switch(operation) {
        case '+':
            result = val1 + val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case '*':
            result = val1 * val2;
            break;
        case '/':
            result = val1 / val2;
            break;
        case '%':
            result = val1 % val2;
            break;
        default:
            result = 'Invalid operation';
    }
    document.getElementById('show').innerHTML = 'Result: ' + result;
});