"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FString_1 = require("../lib/FString");
FString_1.injectFormatToString();
console.log('result:', ':*<020,.5g'.format('456.15454'));
console.log('result:', ':+#20b'.format('100'));
console.log('result:', ':+#20o'.format('100'));
console.log('result:', ':+#20x'.format('100'));
console.log('result:', ':+#20X'.format('100'));
console.log('result:', ':+#020b'.format('100'));
console.log('result:', ':+#020o'.format('100'));
console.log('result:', ':+#020x'.format('100'));
console.log('result:', ':+#020X'.format('100'));
console.log('result:', ':#<-#020.2d'.format('1000000000'));
var format = ':*<+20,.5g';
console.log('result:', '11456.15454'.format(format));
console.log('result:', '11456.15454'.format(':*<+20,.5g'));
console.log('result:', format.format('1'));
console.log('result:', format.format('0'));
format = ':15,.2f';
var money = '123456789.456789';
console.log("\u603B\u91D1\u989D\u4E3A:" + money.format(format) + "\u5143");
console.log(FString_1.f(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\u603B\u91D1\u989D\u4E3A:{123456789.456789:", "}\u5143"], ["\u603B\u91D1\u989D\u4E3A:{123456789.456789:", "}\u5143"])), format));
console.log(FString_1.f(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\u603B\u91D1\u989D\u4E3A:{", ":", "}\u5143"], ["\u603B\u91D1\u989D\u4E3A:{", ":", "}\u5143"])), money, format));
console.log(FString_1.f(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\u603B\u91D1\u989D\u4E3A:{", ":15,.2f}\u5143"], ["\u603B\u91D1\u989D\u4E3A:{", ":15,.2f}\u5143"])), money));
console.log(FString_1.f(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\u6570\u91CF{", "}\u5355\u4EF7{", ":}\u603B\u91D1\u989D\u4E3A:{", ":15,.2f}\u5143"], ["\u6570\u91CF{", "}\u5355\u4EF7{", ":}\u603B\u91D1\u989D\u4E3A:{", ":15,.2f}\u5143"])), '1', '15.32', money));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=test.js.map