/**
 * ------------------------------------
 * File: d:\My Documents\Documents\GitHub\FString\test\test.ts
 * Project: d:\My Documents\Documents\GitHub\FString
 * Created Date: 2021-02-24  2:21:24
 * Author: LiuQixuan(liuqixuan@hotmail.com)
 * -----
 * Last Modified:  2021-05-24  1:09:47
 * Modified By: LiuQixuan
 * -----
 * Copyright 2020 - 2021 AIUSoft by LiuQixuan
 * ------------------------------------
 */

import { injectFormatToString,f} from '../lib/FString'
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
console.log('result:', ':#<-#020.2d'.format('1000000000'))

let format = ':*<+20,.5g'
// @ts-ignore
console.log('result:','11456.15454'.format(format))
// @ts-ignore
console.log('result:','11456.15454'.format(':*<+20,.5g'))
// @ts-ignore
console.log('result:', format.format('1'))
// @ts-ignore
console.log('result:', format.format('0'))

format = ':15,.2f'
let money = '123456789.456789'
// @ts-ignore
console.log(`总金额为:${money.format(format)}元`)
console.log(f`总金额为:{${money}:${format}}元`)
console.log(f`总金额为:{${money}:15,.2f}元`)
console.log(f`数量{${'1'}}单价{${'15.32'}:}总金额为:{${money}:15,.2f}元`)