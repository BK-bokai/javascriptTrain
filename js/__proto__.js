class person
{
    constructor(name, age)
    {
        this.name = name;
        this.age  = age;
    }
}

perla = new person('perla',18);
console.log(perla.__proto__)