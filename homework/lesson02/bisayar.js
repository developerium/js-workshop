function mainfunc()
{
    return (maxnum , a)=>
    {
    let i = 1;
		while(i<= maxnum)
        {
            let rslt = i % a;
            if(rslt === 0)
            console.log('Hamide');
            else console.log(i);
            i= i+1;
		}
    }
}

let firstcall = mainfunc();
firstcall(5,2);



function minmax(params)
{
 let min = Math.min.apply(null,params)
 let max = Math.max.apply(null,params);
 console.log("minimum member of array is =>" + min);
 console.log("maximum member of array is =>" + max);

}

let myarr=[2,4,8,1,9,4];
minmax(myarr);
