"use strict";
exports.__esModule = true;
exports.aFunction = void 0;
var out_1 = require("../out");
var aFunction = function (msg) {
    var optional = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optional[_i - 1] = arguments[_i];
    }
    (0, out_1.typeCheck)({ paramName: msg, expectedType: out_1.JsTypes.String });
    var output = msg;
    if (optional.length > 0) {
        output += optional.join(" ");
    }
    return output;
};
exports.aFunction = aFunction;
