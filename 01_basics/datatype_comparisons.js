// ###Basic comparisons
// console.log(2<2);
// console.log(2>2);
// console.log(2<=2);
// console.log(2>=2);
// console.log(2==2);
// console.log(2===2);     

//* datatype conversions
// == works differently than other comparison operators. While other comparison operator compares both "==" don't.That's why:
console.log(null > 0);//false-converted but null is not greater than 0
console.log(null == 0);//false- didn't convert so they are not equal
console.log(null >= 0);//true- converted and null converts to 0 so null is equal to 0

//!!!! Don't do these type of comparisons in program as they are very confusing and the results are unexpected.
