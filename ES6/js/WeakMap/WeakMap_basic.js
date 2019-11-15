$(document).ready(function () {

    {
        // WeakMap 和 Map 資料結構基本上是類似的，唯一的區別是 WeakMap 只接受 object 當作 key
        let myMap = new WeakMap;


        let keyobj = {
            age: 18,
            tall: 170,
        };
        let keyFunc = () => {
            alert('123');
        }


        myMap.set(keyobj, 'value associated with keyObj');
        myMap.set(keyFunc, 'value associated with keyFunc');


        console.log(myMap.get(keyobj));
        console.log(myMap.get(keyFunc));

        $('.button').on('click', function () {
            let myP = $('p.delete');
            let newMap = new WeakMap();
            newMap.set(myP, 'helloMyp');
            myP.remove();
            myP = null;
            // myP 被回收後，相對應的 key 也會自動被刪除
            console.log(newMap.get(myP));

        })

    }

})