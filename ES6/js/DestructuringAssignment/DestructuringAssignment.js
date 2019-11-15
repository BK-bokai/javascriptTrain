//解構賦值
let foo=['hi','ha','ya'];

let [A, B, C]= foo;
console.log(A,B,C);

//可以用預設值，當沒指定時就是預設值
let [D='yo',E='你好']=['嗨嗨'];
console.log(D,E);

//也可以跳過
let [F, ,G] = foo;
console.log(F,G);

//也可以存在物件但要對一樣的key
let obj={
    yooy:'hi',
    bar:'yo'
};

let {yooy, bar} = obj;
console.log(yooy,bar);

// 也可以取值給已經宣告過的變數
let obj2={
    yooy:'hi2',
    bar:'yo2'
};
({yooy, bar}=obj2);
console.log(yooy,bar);