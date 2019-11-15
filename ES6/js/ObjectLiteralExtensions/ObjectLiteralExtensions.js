let foo = 'foo0';
let bar = 'bar';

let obj = {
    foo,
    bar
};

obj = {
    [foo + ' is'] : (a=12,b=13)=>{
        console.log(a+b)
    }
}

console.log(obj);
obj['foo0 is']();