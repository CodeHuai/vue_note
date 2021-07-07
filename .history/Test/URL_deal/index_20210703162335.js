const fs = require('fs');
const path = require('path');

// initNum为初识值， count为循环值
function fs_deal(urlStr, start, end) {
    let urlArr = [];
    let temStr = '';
    for (let i = start; i <= end; i++) {
        temStr = urlStr + i;
        urlArr.push(temStr);
    }
    return urlArr;
}

let str = 'https://www.bilibili.com/video/BV15741177Eh?p=';
let arr = fs_deal(str, 1, 2);
console.log(arr);