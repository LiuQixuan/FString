/**
 * ------------------------------------
 * File: d:\My Documents\Documents\GitHub\FString\test\test.ts
 * Project: d:\My Documents\Documents\GitHub\FString
 * Created Date: 2021-02-24  2:21:24
 * Author: LiuQixuan(liuqixuan@hotmail.com)
 * -----
 * Last Modified:  2021-02-27  1:12:45
 * Modified By: LiuQixuan
 * -----
 * Copyright 2020 - 2021 AIUSoft by LiuQixuan
 * ------------------------------------
 */

import { injectFormatToString} from '../lib/FString'
// format('','o^-#012,.8f')
injectFormatToString()
// // @ts-ignore
// console.log('1221235.45'.format(':020,.5f'))
// // @ts-ignore
// console.log('122.123545'.format(':*<020,.5g'))
// @ts-ignore
console.log('result:',':*<020,.5g'.format('456.15454'))
// @ts-ignore
console.log('result:',':+#20b'.format('100'))
// @ts-ignore
console.log('result:',':+#20o'.format('100'))
// @ts-ignore
console.log('result:',':+#20x'.format('100'))
// @ts-ignore
console.log('result:',':+#20X'.format('100'))
// @ts-ignore
console.log('result:', ':+#020b'.format('100'))
// @ts-ignore
console.log('result:', ':+#020o'.format('100'))
// @ts-ignore
console.log('result:', ':+#020x'.format('100'))
// @ts-ignore
console.log('result:', ':+#020X'.format('100'))
// @ts-ignore
console.log('result:', ':#<-#020.2d'.format('1000000000'));

let format = ':*<+20,.5g'
// @ts-ignore
'11456.15454'.format(format)
// @ts-ignore
'11456.15454'.format(':*<+20,.5g')

let money = '123456789.456789'
format = ':15,.2f'
// @ts-ignore
console.log(`总金额为:${money.format(format)}元`)