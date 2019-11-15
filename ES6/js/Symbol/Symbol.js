// 每个从Symbol()返回的symbol值都是唯一的
let A=Symbol('A');
let B=Symbol('A');


console.log(A);
console.log(B);
console.log(A===B);//false
console.log(A.toString()===B.toString());//true

//由於每個 Symbol 值都是不相等的，所以用 Symbol 來當作物件的屬性名稱，可以確保不會出現同名的屬性，這特性能防止一個物件的屬性不會在其他地方被意外的覆蓋掉。
let myarr = 
{
    A:'hello',
    B:'world'
}

console.log(typeof(myarr['A'])+''+typeof(myarr.B))
