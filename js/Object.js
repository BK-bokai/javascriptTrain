//可用這兩種方法建立物件
let Aaron = new Object;
Aaron.name="Aaron";
Aaron.age =22;

let Perla = {
    name:'Perla',
    age:22,
    sayName : function(){
        console.log(`Im ${this.name}`)
    }
}

//可用這兩種方法使用物件內容
Perla.sayName();
Perla['sayName']();

//刪除
delete Aaron.name;

//檢查元素是否在物件內;
console.log('name' in Aaron);
console.log('age' in Aaron) ;

console.log(Aaron.hasOwnProperty('name'));
console.log(Aaron.hasOwnProperty('age'));

// 雖然兩者都可以檢查物件的屬性是否存在，
//但 hasOwnProperty() 方法不會往上檢查物件的原型鏈 (prototype chain)，
//只會檢查物件本身是否存在這個屬性，而 in 運算子則會繼續往物件原型鏈上檢查
console.log(Aaron.hasOwnProperty('toString'));
console.log('toString' in Aaron);
