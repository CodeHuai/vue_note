const fs = require('fs');
const path = require('path');

// str---拼接HTP主要路径   initNum -- 变量起始值 count -- 循环次数
//  https://www.bilibili.com/video/BV15741177Eh?p=1
function dirList(str, initNum, count) {
    let urlArr = [];
    for (let i = 1; i < count; i++) {
        str = str + initNum + "\n";
        urlArr.push(str);
    }
    return urlArr;
}
let str = `https://www.bilibili.com/video/BV15741177Eh?p=`;
const arr = dirList(str, 1, 2);
console.log(arr);