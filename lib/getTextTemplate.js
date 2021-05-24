"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFString = void 0;
function parseFString(strArr) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var str = strArr[0];
    for (var i = 1; i < strArr.length; ++i) {
        str += values[i - 1];
        str += strArr[i];
    }
    return textTemplate(str);
}
exports.parseFString = parseFString;
function textTemplate(templateStr) {
    var stringArr = templateStr.split(/\{.*?\}/g);
    var valueArr = templateStr.match(/(?<=\{)(.*?)(?=\})/g);
    var objectArr = valueArr === null || valueArr === void 0 ? void 0 : valueArr.map(function (str) {
        str = str.replace(/[\{\}]/g, "").replace(/[:]+/, ':');
        var tmpArr;
        if (str.search(':') === -1) {
            tmpArr = [str, ''];
        }
        else {
            tmpArr = str.split(":").map(function (str) {
                if (str.search(/^['"]/) !== -1 && str.search(/['"]$/) !== -1) {
                    str = str.slice(1, str.length - 1);
                }
                return str;
            });
        }
        return Object.fromEntries([tmpArr]);
    });
    return __spreadArray([stringArr], objectArr);
}
//# sourceMappingURL=getTextTemplate.js.map