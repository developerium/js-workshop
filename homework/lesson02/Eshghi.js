function Division (count) {
    return function (divisor) {
        for (number = 1; number <= count; number++) {
            if (number%divisor == 0) {
                console.log('FIZZ');
            }
            else {
                console.log(number);
            }
        }
    }
}

const FUNCTION = Division(20);
console.log(FUNCTION(5));



const Numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(Math.max(Numbers));
console.log(Math.min(Numbers));
