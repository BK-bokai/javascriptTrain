//如果想知道一個屬性是存在 instance 身上，還是存在於它屬於的原型鍊當中，可以用hasOwnProperty這個方法：
function person(name, age) {
    this.name = name;
    this.age = age;
}

person.prototype.log = function () {
    console.log(`hello everyone Im ${this.name}, Im ${this.age} years old`)
}

let Aaron = new person('Aaron', '18');
Aaron.log();

console.log(Aaron.__proto__.hasOwnProperty('log'));//true
console.log(Aaron.hasOwnProperty('log'));//false

function call(Obj, MethodName)
{
    var realMethodOwner = Obj;

    // 不斷往上找，直到 null 或者是找到真的擁有這個 method 的人為止
    while (realMethodOwner && !realMethodOwner.hasOwnProperty(MethodName)) {
        realMethodOwner = realMethodOwner.__proto__;
    }

    if (!realMethodOwner) {
        throw 'method not found.';
    }
    else{
        realMethodOwner[MethodName].apply(Obj);
    }    
}


call(Aaron, 'log');
// console.log(call(Aaron, 'l'));

Aaron['log'].apply(Aaron);
console.log(typeof(Aaron));
