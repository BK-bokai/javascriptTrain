//邏輯運算式javascript 和其他語言 AND &&、 OR || 還有 NOT ! 有些微不同
let a = 123;
let b = 'Aaron'
let c = null

console.log(a && b)
console.log(a || b)
console.log(b || c)

//javascript只有在判斷是時&& || 才會toBoolean 但!本身就換轉Boolean所以有人會!!經過兩次轉換來代替Boolean
console.log(!!(a && b))//true
console.log(!!(a || b))//true
console.log(!!(b && c))//false

// 另外undefine null 經過boolean()是false
console.log(!!(null))//false
console.log(!!(undefined))//false
//number 是 -0, +0 ,NaN是 false其他皆是true
console.log(!!(+0))//false
console.log(!!(-0))//false
console.log(!!(123))//true

//字串只有空字串為false
console.log(!!(''))//false空字串
console.log(!!('false'))//true不管內容是什麼，他不是空字串

//symbol一定true
console.log(!!(Symbol()));//true

//Object一定true
console.log(!!({}))//true
console.log(!!([]))//true