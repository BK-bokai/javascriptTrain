// 傳統標準的函數宣告語法
let multiply = function (a, b) {
    return a + b;
}

alert(multiply(1, 2));

// 箭頭函數
multiply = (a, b) => {
    return a * b;
}

alert(multiply(1, 2));

let numbers = [1, 2, 3];

// callback 用 Arrow Functions 的寫法更精簡
let doubles = numbers.map((num) => {
    return num * 2;
});

// [2, 4, 6]
console.log(doubles);

//setInterval可以設定時間區間，當時間到時就會無限重複迴圈
// function person() {
//     let self = this;

//     self.age = 0;
//     setInterval(function growup() {
//         self.age += 1;
//         alert(self.age);
//     }, 3000);
// }

person = () => {
    let self = this;
    self.age = 0;
    setInterval(() => {
        self.age += 1;
        alert(self.age);
    }, 3000);
}

// person();