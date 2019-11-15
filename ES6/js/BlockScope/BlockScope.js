//global變數
var a = 1;
{
    // block scope 變數
    let a = 2;
    // let a = 3;//不能重複宣告
    a=3//但可以重新賦予值
    alert(a);
    //3
}

alert(a);
//1

function varTest_1()
{
    
    var a = 4;
    if(true)
    {
        var a = 5;
        alert(a);//4
    }

    alert(a);
}

varTest_1();


function varTest_2()
{
    let a = 3;
    if (true)
    {
        let a = 4; 
        alert(a);
    }
    alert(a);
}

varTest_2();

{
    const B = 3;
    // B = 3;//會報錯，不能改變常數內的數值;
    // const B = 4;//也不能重複宣告
    alert(B);

    const Arr=[1,2];
    Arr.push(3);//可以新增陣列內的值
    alert(Arr);

    // Arr = 123;//一樣不能改變所以會報錯
    // alert(Arr);
    Arr[0]=4;
    alert(Arr);//但可以改變陣列內的內容

}


