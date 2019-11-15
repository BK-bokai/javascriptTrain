// javascript function很像class，但ES6已經推出class用法
//回到這裡，person本身就是一個constructor，只要一被new 就會直接建構person內所有指令;
//**  name 跟 age 這兩個屬性，
//**  很明顯是每一個 instance 都會不一樣的。
//**  可是 log 這個 method，
//**  其實是每一個 instance 彼此之間可以共享的，因為都在做同一件事情。*/
//**但其實還是佔用了兩份空間，意思就是他們其實是兩個不同的 function。 */
function person(name, age) {
    this.name = name;
    this.age = age;
    // this.log = function(){
    //     console.log(`大家好，我是${name}，今年${age}歲`)
    // }
}

//**我們可以把這個 function 抽出來，變成所有 Person 都可以共享的方法 prototype */
person.prototype.log = function () {
    console.log(`大家好，我是${this.name}，今年${this.age}歲`)
}

// function goodperson(name, age) {
//     this.name = name;
//     this.age = age;
// }

// goodperson

let Aaron = new person('Aaron', 18);//一被new馬上就會執行建構式;
let Nick = new person('Nick', 20);
Aaron.log();//此時Aaron沒有log這個方法，但我們已經他她家在他的原型鏈，所以javascript會自動去找出原型鏈內較log的方法，若依然沒找到就會顯示undefine;
Nick.log();

console.log(Aaron)
console.log(Aaron.__proto__);
console.log(person.prototype);
console.log(Aaron.__proto__===person.prototype);
console.log(person.prototype.__proto__ === Object.prototype)
console.log(Object.prototype)









