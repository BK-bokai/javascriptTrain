$(document).ready(function () {
    //這是一般寫法
    {
        for (let i = 0; i < 5; i++) {
            setTimeout(function () {
                console.log(i)
            }, i * 1000)
        }
    }
    //IIFE(Immediately Invoked Function Expression)就是在function指定的當下去執行他
    {
        for( let i = 0; i<5 ; i++ )
        {
            (function(x){
                setTimeout(function(){
                    console.log(x)
                },x*1000)
            })(i)
        }
    }
})