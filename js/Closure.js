{
    let msg = 'globe.'
    let outer = function(){
        let msg = 'local.'
        
        let inner = function(){
            return msg;
        }
        
        return inner;

    }

    let innerFunc = outer();
    let result = innerFunc();
    console.log(result)
    // 當內部 (inner) 函式被回傳後，
    // 除了自己本身的程式碼外，也可以 穿越 取得了內部函式「當時環境」的變數值，
    // 記住了執行當時的環境，這就是「閉包」。
}

{
    let counter = function(){
        let count = 0;
        let innerCounter = function()
        {
            return count++;
        }

        return innerCounter;
    }

    let count = counter();

    for (let i = 0; i<6 ;i++)
    {
        console.log(count());
    }
    //把 count 封裝在 counter() 當中，
    // 不但可以讓裡面的 count 不會暴露在 global 環境造成變數衝突，也可以確保內部 count 被修改。

}

{
    let counter = ()=>{
        let count = 0
        return ()=>{
            return count++
        }
    }
    let count = counter();
    for (let i = 0; i<6 ;i++)
    {
        console.log(count());
    }
}