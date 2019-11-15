class people 
{
    constructor(name)
    {
        this.name = name
    }
    //靜態方法不須實例化(instantiating)其類別即可被呼叫，但當類別被實例化(instantiating)後則靜態方法不能被呼叫。
    static drink()
    {
        return "我好想喝水";        
    }

    static eat()
    {
        return `${this.drink()} 也好想吃飯`
    }
}

// let Aaron = new people('Aaron');
// console.log(Aaron.eat());
console.log(people.eat());


class math 
{
    static add(y=5)
    {
        return y;
    }
}

console.log(math.add(6));

class pluse extends math
{
    static add5(z=10)
    {       
        return `${this.add(5)+z}`//繼承了父類別的add所以可以直接用
        // return `${super.add(5)+z}` //用super也可以但就是不能實體化
    }
}

// let A = new pluse(10)
console.log(pluse.add5(12));