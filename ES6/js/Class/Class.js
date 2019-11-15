class car {
    constructor() {
        this.name = '我只是車子的總稱'
        console.log(`我是一台${name}`)
    }
    speak()
    {
        console.log('我是父類別');
    }

    print()
    {
        console.log(`print${this.name}`)
    }
}

class toyota extends car{
    constructor(name)
    {
        
        super();//若父類別有constructor必須使用super();
        this.name=name;
        console.log(`現在要生產一台${name}`);
    }

    //覆蓋父類別一樣的方法
    speak()
    {
        super.speak();//使用父類別的方法
        console.log("八八八")
    }
}

let myCar = new toyota('toyota');
myCar.speak();
myCar.print();//雖然是父類別的方法，但this卻是子類別的
