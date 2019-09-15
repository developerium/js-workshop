
//region 'FizzBazz'
//تابع بیرونی دو عدد تقسیم پذیر را میگیرد و تابع درونی حلقه ی چاپ را از کاربر به عنوان ورودی می پذیرد
function FizzBazz(Fizz,Bazz) {
    return function FB(MaxLoop){
        for (let i=1; i <= MaxLoop; i++){
            if (i % Fizz === 0) console.log('Fizz');
            else if (i % Bazz === 0) console.log('Bazz');
            else console.log(i);
        };
    };
};

let InnerFunction = FizzBazz(3,5);
console.log(InnerFunction(100));
//endregion

//region 'MaxMin'

//تابعی که یک آرایه ی تصادفی در یک رنج مشخص و تعداد مشخص ایجاد می کند
function CreateRandomArray(MinRenge,MaxRenge,ArrayLength){
    let Ary = [];
    for (let i= 0; i<ArrayLength ; i++){
        Ary.push(Math.floor(Math.random() * (MaxRenge - MinRenge + 1)) + MinRenge);
    };
    return Ary
};

//آرایه ای با 4 سلول دارای داده ی تصادفی بین 1 تا 10
const OuterAry = CreateRandomArray(1,10,4)
console.log(OuterAry);
console.log(Math.max(...OuterAry));
console.log(Math.min(...OuterAry));

//endregion

