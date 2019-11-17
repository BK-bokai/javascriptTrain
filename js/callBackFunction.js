// 這個函式只會在滿足了某個條件才會被動地去執行，我們就可以說這是一個 Callback function。
$(document).ready(function () {

    let getText = function () {
        let text = $(this).parent().text();
        console.log(text);
    }

    $('button').on('click', getText)
    // getText 就是 callback function


    {
        let funcA = function () {
            let i = Math.random() + 1
            setTimeout(function () {
                console.log('funcA')
            }, i * 1000);
        }

        let funcB = function () {
            let i = Math.random() + 1;
            setTimeout(function () {
                console.log('funcB')
            }, i * 1000);
        }
        funcA();
        funcB();
        // 這時候就沒辦法確定是 "function A" 會先出現還是 "function B" 會先出現了對吧？
    }

    // 像這種時候，為了確保執行的順序，就會透過 Callback function 的形式來處理：
    {
        let funcA = function(callback){
            let i = Math.random() +1;
            setTimeout(function(){
                console.log('funcA')

                if(!!(typeof(callback) === 'function'))
                {
                    callback()
                }
            },i*1000)
        }

        let funcB = function(){
            let i = Math.random()+1;
            setTimeout(function(){
                console.log('funcB')
            },i*1000)
        }

        funcA(funcB)
        // 像這樣，無論 funcA 在執行的時候要等多久， funcB 都會等到 console.log('function A'); 之後才執行。
    }

})
