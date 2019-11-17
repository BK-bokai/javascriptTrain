{
    let foo ='foo';
    let Obj = {
        foo:'Hi'
    }

    let sayFoo = function(){
        console.log(this.foo)
    }

    Obj.sayFoo = sayFoo;

    Obj.sayFoo();//這裡的this是Obj;foo:'Hi';
    sayFoo();//這裡的this是globe即window;而foo ='foo'是屬於{}，因此undefine，除非用var;
    
}

{
    let Obj = {
        func1 : function(){
            "use strict";//當使用嚴格模式，this就不會為window了
            console.log(this === Obj)
            let func2 = function(){
                console.log(this === Obj)
                console.log(this === window)
            }
            func2();
        }        
    }

    Obj.func1();//因為執行func1的是Obj所以第一個為true,但第二個因為沒有指定誰執行，因此this為window，故輸出為false及true
}
