const givenumber = document.querySelector("#give-number");


const fizzBuzz = (givenNumber) => {
    const newArry = givenNumber.map(i => {
        if (i > 100) {
            return i + '... Please provide a number below 100';
        }
        if (i <= 0) {
            return i + '... provide a positive number';
        }
        if (i % 15 === 0) {
            console.log('FizzBuzz');
            return 'FizzBuzz';
        }
        if (i % 3 === 0) {
            console.log('Fizz');
            return 'Fizz';
        }
        if (i % 5 === 0) {
            console.log('Buzz');
            return 'Buzz';
        }
            return i;
        
        ;
    });

  
    return document.querySelector("#fizz-result").innerHTML = newArry;
};
