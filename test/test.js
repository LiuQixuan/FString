"use strict";
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
'11456.15454'.format(format);
'11456.15454'.format(':*<+20,.5g');
var money = '123456789.456789';
format = ':15,.2f';
console.log("\u603B\u91D1\u989D\u4E3A:" + money.format(format) + "\u5143");
//# sourceMappingURL=test.js.map