"use strict";

// 通过arr控制输出的顺序
var bundle = [
  require("./components/card/protoIndex"),
  require("./components/hello/protoIndex"),
];
module.exports = bundle;
if (process.env.NODE_ENV === "development") {
  bundle.isDev = true;
  window["vision-multi-shared"] = bundle;
}
