//if用法
let Apple = {
    value:10
}

if( Apple.value <10 )
{
    console.log('買10顆蘋果');
}
else if(Apple.value >=10)
{
    console.log('買5顆就好');
}
else
{
    console.log('今天沒賣，沒得買')
}

//switch
let month = 12
switch(Math.ceil(month/3)){//Math.ceil是無條件進位
    case 1:
        console.log("冬天");
        break;
    case 2:
        console.log("春天");
        break;
    case 3:
        console.log("夏天");
        break;
    case 4:
        console.log("秋天");
        break;
    default:
        console.log("月份有誤")
        break;

}

// 三元運算子:
console.log((Apple.value < 10) ? "買10顆" : "買5顆")

//for迴圈
for( let i = 0; i <10; i+= 1)
{
    if(i === 3)
    {
        continue;
    }

    if (i === 6) {
        break;
    }

    console.log(i)
}

//while迴圈
{
    let i = 0
    while( i < 10)
    {
    //     if(i === 3)
    //     {
    //         continue;
    //     }
    
        if (i === 6) {
            break;
        }
        console.log(i)
        i += 1;

    }
}

// 選樂透
{
    let lottery = []
    while(lottery.length < 6)
    {
        n = Math.floor( Math.random() *49 ) +1;
        if(lottery.indexOf(n) === -1)
        {
            lottery.push(n);
        }
    }
    console.log(lottery) 
}

{
    let lottery = [];
    for (let i=0; i<6; i+=1)
    {
        n=Math.floor(Math.random()*49) +1
        if(lottery.indexOf(n) != -1)
        {
            i -= 1
        }
        else{
            lottery[i] = n
        }
    }

    console.log(lottery)
}



