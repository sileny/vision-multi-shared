const view = require("./index.js");

module.exports = view;

if (process.env.NODE_ENV === "development") {
	view.isDev = true;
	window["vision-multi-shared"] = view;
}
