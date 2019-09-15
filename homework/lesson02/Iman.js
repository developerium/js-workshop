const min=function(a,b){
  if (a<b)
      return a
  else
      return b;
}

const IsEven=function(n){
  if (n<0) n=-1*n;
  if (n==0) return true;
  if (n==1) return false;
  if (n>1) return IsEven(n-2);
}

const countChar=function(a,char){
  let b=0;
  for (let i=0;i<a.length;i++){
    if (a[i]==char)
        b++;
  }
  return (b);
}

const arraymin=function(a){
  let minvalue=Infinity;
  for (let i=0;i<a.length;i++){
    if (a[i]<minvalue)
      minvalue=a[i];
  }
  return minvalue;
}
console.log(min(1,2));

console.log(min(10,2));

console.log(IsEven(-10));

console.log(countChar("ThiBBBs is B of other B","B"));

console.log(arraymin([100,20,30,40,90,22,20]));
