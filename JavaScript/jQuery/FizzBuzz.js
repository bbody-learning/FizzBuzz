$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();

        var input = $("#numberInput");
        var output = $("#output");

        output.html("");

        var number = parseInt(input.val());

        for (var i = 1; i <= number; i++) {
            output.append($("<li>" + getFizzBuzzAnswer(i) + "</li>"))
        }
    });

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
});