const fs = require('fs');
const path = require('path');

// initNum为初识值， count为循环值
function fs_deal(urlStr, initNum, start, end) {
    let urlArr = [];
    for (let i = start; i < end; i++) {
        urlStr += (urlStr + i);
        urlArr.push(urlStr);
    }
}
