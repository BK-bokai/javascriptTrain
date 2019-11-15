{
    let arr = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];

    console.log(arr);

    //給定初始值
    let MyMap = new WeakMap(arr)

    console.log(MyMap.get('key1'))

    //可以看Map有幾組資料
    console.log(MyMap.size);

    //用has判斷Map是否有指定的key
    console.log(MyMap.has('key1'));


    //for迴圈
    for (let [key, value] of MyMap) {
        console.log(`${key}=>${value}`);
    }

    MyMap.forEach(function (value, key, MyMap) {
        console.log(`${key}=>${value}`)
    })


    //delete刪除key value
    MyMap.delete('key1');
    console.log(MyMap.size);

    //跟Redis一樣可以看所有的key
    console.log(MyMap.keys());

    //清空Map
    console.log(MyMap.clear());

    console.log(MyMap.size);



}