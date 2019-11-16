//基本型別
let A= 123;
let B= 123;

//一定是true
console.log(A === B)

//變數 A的內容是透過複製變數 B而來，基本型別時，實際上變數 A是去建立了一個新的值，
//將變數 B的內容複製了一份過來，這時候 a 與 b 各自是獨立的
//因此其中一方更新，另外一方也不會更新
A=B;
B=456;
console.log(A === B);

// 像這種情況，我們通常會稱作「傳值」 (pass by value)。


//物件
let Aaron = {
    age:20
}

let Perla = {
    age:20
}

console.log(Aaron === Perla)//false


// 兩個人年紀一樣，但實際上是分別的兩個人，難道Aaron 賺10元，Perla口袋就會多10元嗎?
Aaron.earn = 10;

console.log(Aaron.earn);//10
console.log(Perla.earn);//undefined

//但如果以下例子呢
Perla = Aaron;
console.log(Perla === Aaron);//true
//這概念有點像電腦的建立捷徑，所以今天Aaron跟Perla變成共用一個記憶體空間


//既然兩人共用一個記憶體，當其中一個改變，另外一個也會跟個改
Perla.earn = 2000;
console.log(Aaron.earn);

//我們通常會稱作「傳址」 (pass by reference)。

//大多數的情況下，基本型別是「傳值」，而物件型別會是「傳址」的方式

//但也有例外
// 我們來看看下面這個例子：
function changeEarn_1(Obj) {
    Obj = {
        earn:20,
    }
}
//當function內的Obj被重新賦值時，不會改變外面變數
changeEarn_1(Aaron)
console.log(Aaron.earn);//依然是2000

//因此不能用重新賦值的方式
function changeEarn_2(Obj)
{
    Obj.earn = 20
}
changeEarn_2(Aaron);
console.log(Aaron.earn);
console.log(Perla.earn);