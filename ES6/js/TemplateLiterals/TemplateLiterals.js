// 多行字串
let text1 = "hello" +
    "world"//傳統寫法

let text2 = `hello
world`

console.log(text2)

let a = 5;
let b = 10;

console.log(`Fifteen if ${a+b} 
not ${2* (a+b)}`)

let sayhi = (a='hello', b='你好')=>{
    return `${a+b}`
}

console.log(`foo ${sayhi()} bar`);