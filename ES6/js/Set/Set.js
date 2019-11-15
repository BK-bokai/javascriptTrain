{
    //add及初始化
    let arr = [2,3,4];
    let Myset = new Set(arr);//初始化
    Myset.add(1);
    Myset.add(5);
    Myset.add(5);//不會有重複的
    Myset.add('some Text');
    Myset.add({
        a:1,
        b:2
    })

    console.log(Myset);
    
    //也可用has
    console.log(Myset.has(5))
    console.log(Myset.has('Some Text'.toLowerCase()));
    console.log(Myset.has('some Text'));

    //size
    console.log(Myset.size);

    //keys and values一樣因為沒key
    console.log(Myset.keys());
    console.log(Myset.values());
    
    for( let value of Myset.values())
    {
        console.log(`${value}`);
    }

    console.log(Myset.entries());

    for(let value of Myset.entries())
    {
        console.log(`${value}`);
    }

    for(let value of Myset)
    {
        console.log(value);
    }


}