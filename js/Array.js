//可用下列三種方法建立陣列;
let A_arr=new Array;
A_arr[0]=1;
A_arr[1]=2;
A_arr[2]='dsisj';


let B_arr = [];
B_arr[0]=1;
B_arr[1]=2;
B_arr[2]='sdasd';

let C_arr = [1,2,'dsa'];

console.log(A_arr);
console.log(B_arr);
console.log(C_arr);

console.log(A_arr.length)

// 可用下方法刪除陣列元素

delete A_arr[2];//只刪除元素內容
console.log(A_arr);

B_arr.length = 1;
console.log(B_arr);

// 移除陣列末端項目
B_arr.pop();
console.log(B_arr);

//新增陣列
// 加入項目至陣列末端
B_arr.push(2);


B_arr[7]=12;
console.log(B_arr);


//判斷是否為陣列
console.log(Array.isArray(B_arr));