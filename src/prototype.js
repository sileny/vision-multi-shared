// 自动读取protoIndex,无需手动配置
var prototypeIndex = require('./protoIndex.js');
var bundle = [];
prototypeIndex.forEach((item) => {
  item = item.default || item;
  bundle.push(item.prototype);
});

module.exports = bundle;
