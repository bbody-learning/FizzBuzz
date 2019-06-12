const runFizzBuzz = () => {
    const input = document.querySelector("#numberInput");
    const output = document.querySelector("#output");

    output.innerHTML = "";

    const number = parseInt(input.value);

    const answers = [];

    for (let i = 1; i <= number; i++) {
        answers.push(`<li>${getFizzBuzzAnswer(i)}</li>`);
    }

    output.innerHTML = answers.join('\n');
}

const getFizzBuzzAnswer = number => {
    if ((number % 3) === 0 && (number % 5) === 0) {
        return "FizzBuzz";
    } else if ((number % 3) === 0) {
        return "Fizz";
    } else if ((number % 5) === 0) {
        return "Buzz";
    }
    
    return number
}