var parent = document.getElementById('parent');
var child = document.getElementById('child');

// 透過 addEventListener 指定事件的綁定
// 第三個參數 true / false 分別代表捕獲/ 冒泡 機制
var capParent = function () {
    console.log('Parent Capturing')
}

parent.addEventListener('click', capParent, true)

parent.addEventListener('click', function () {
    console.log('Parent Bubbling')
}, false)

child.addEventListener('click', function () {
    console.log('Child Capturing')
}, true)

child.addEventListener('click', function () {
    console.log('child Bubbling')
}, false)

//刪除監聽事件
parent.removeEventListener('click', capParent, true)

var myList = document.getElementById('myList');
for (var i = 1; i < myList.childNodes.length; i++) {
    console.log(myList.childNodes)
}