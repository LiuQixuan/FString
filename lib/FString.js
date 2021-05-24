"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectFormatToString = exports.f = void 0;
var getTextTemplate_1 = require("./getTextTemplate");
var FStringFormat_1 = require("./FStringFormat");
Object.defineProperty(exports, "injectFormatToString", { enumerable: true, get: function () { return FStringFormat_1.injectFormatToString; } });
function f(strArr) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var s = getTextTemplate_1.parseFString.apply(void 0, __spreadArray([strArr], values));
    var stringArr = s[0];
    var formatObject = s.slice(1);
    var formatedStrArr = formatObject.map(function (dict, index) {
        var raw = Object.keys(dict)[0], formatString = dict[raw];
        return FStringFormat_1.formatByParam(raw, ":".concat(formatString));
    });
    var resultStr = stringArr[0];
    for (var i = 1; i < stringArr.length; ++i) {
        resultStr += formatedStrArr[i - 1];
        resultStr += stringArr[i];
    }
    return resultStr;
}
exports.f = f;
//# sourceMappingURL=FString.js.map