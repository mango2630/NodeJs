// 加载时会执行模块里边的内容
const m1 = require('./m1')
const m2 = require('./m2')
const m3 = require('./m3_module')
const m4 = require('./m4_exports')

console.log(m1); // {}
console.log(m2); // {}
console.log(m3);
console.log(m4);