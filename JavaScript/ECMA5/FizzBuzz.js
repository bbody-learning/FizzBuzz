function runFizzBuzz() {
    var errorMessage = document.getElementById("errorMessage");
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    
    output.innerHTML = "";
    errorMessage.style.display = "none";

    var number = parseInt(input.value);

    if (isNaN(number)) {
        errorMessage.style.display = "block";
        return;
    }

    for (var i = 1; i <= number; i++) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(getFizzBuzzAnswer(i));

        node.appendChild(textnode);
        output.appendChild(node);
    }
}

function getFizzBuzzAnswer(number) {
    if ((number % 3) === 0 && (number % 5) === 0) {
        return "FizzBuzz";
    } else if ((number % 3) === 0) {
        return "Fizz";
    } else if ((number % 5) === 0) {
        return "Buzz";
    } else {
        return number;
    }
}