function foo(x,y,z)
{
    console.log(x,y,z)
}

let arr=[1,2,3]
//...三個點可以將陣列展開成以逗號相隔的個別變數
console.log(...arr)

//可以丟給function用
foo(...arr);

//也可以放在多個參數中間使用
console.log(1,2,...arr,5)

//也可以插入陣列內
A=[0,...arr,4,5]
console.log(A);

//也可用來結合多陣列
B=[...A,...arr]
console.log(B);

//另外也可與function配合，指定不訂陣列

function fn(...myarr)
{
    console.log(myarr)
}

fn([1,2,3,4,6,58,9,4,5])