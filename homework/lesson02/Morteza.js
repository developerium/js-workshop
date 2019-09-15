//---------- FizzBuzz ---------
function FizzBuzzTest(val1) {
    return (val2) => 
    {
        for (let i=1 ;i<=val1;i++){
            if (i%val2==0){
                console.log('Fizz');
            } else{
                console.log(i);
            }

        }

    }
    }
    let test = FizzBuzzTest(30);
    console.log(test(3));
//----------- MIN--MAX ----------
console.log('--------');

function getmax(params) {
    let mx=params[0];
    for (i = 1; i < params.length; i++) {
        if (params[i]>mx){
            mx=params[i]
        }
    }
    return(mx);
}
function getmin(params) {
    let mx=params[0];
    for (i = 1; i < params.length; i++) {
        if (params[i]<mx){
            mx=params[i]
        }
    }
    return(mx);
}

const Numbers = [1, 20, 3, 4, 5, -6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(getmax(Numbers));
console.log(getmin(Numbers));
