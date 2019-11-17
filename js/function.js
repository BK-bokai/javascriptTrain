// 定義function有以下方法
//函式宣告（Function Declaration）
{
    function square(a) {
        return a * a
    }

    console.log(square(7))
}
// 函式運算式（Function Expressions）
{
    let square = function (a = 2) {
        return a * a
    }

    console.log(square(6))
}

// 在函式運算式中，如果想要在 function 後面加上一個名字是可以的嗎？
// 可以但沒必要
{
    let square = function func(a) {
        console.log(typeof (func));
        return a * a;
    }


    console.log(square(8))
    console.log(typeof (func))//undefind，但那名子是區域變數
}

// 透過 new Function 關鍵字建立函式，但較少用
{
    let square = new Function('a', 'return a*a')
    console.log(square(10));
}

//Hoisting
{
    let x = 1;

    let doSomeThing = function (y) {
        //var x
        console.log(x);   // 會出現什麼？undefind
        //當你在還沒宣告變數時，使用此變數，但在使用候用var宣告他，javascript會自動幫你在使用此變數之前
        // var x
        //所以上面console.log的結果是undefind不是error，
        //我們稱此為變數提升
        var x = 100;
        return x + y;
    };

    console.log(doSomeThing(50));   // 150
    console.log(x);                 // 1
}
//function也有Hoisting
{
    console.log(square(12));//144
    var square = function(a)
    {
        return a*a
    }
    // 與變數提升的差別在於變數提升只有宣告被提升，而函式的提升則是包括內容完全被提升。
}

//最後補充
// 變數有效範圍 (scope) 的最小切分單位是 function (ES6 的 let 與 const 例外)
// 即使是寫在函式內，沒有 var 的變數會變成「全域變數」
// 全域變數指的是全域物件 (頂層物件即window) 的「屬性」
var Aaron = "帥哥"//在最外層所以是全域
var Bruce //在最外層所以是全域
console.log(window.Aaron)

function person ()
{
    var Perla = "美女";//區域
    Bruce = '帥哥哥';//全域
}
person();


console.log(window.Perla)
console.log(window.Bruce)
