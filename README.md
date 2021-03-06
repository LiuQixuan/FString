# FString风格格式化库
- [FString风格格式化库](#fstring风格格式化库)
- [FString](#fstring)
  - [简介](#简介)
  - [此npm包支持格式化形式:](#此npm包支持格式化形式)
  - [用法](#用法)
  - [参数说明](#参数说明)
    - [**格式描述符**](#格式描述符)
    - [**f-string 语法**\[^3\]](#f-string-语法3)
  - [测试](#测试)
  - [注意](#注意)
  - [优势](#优势)
  - [历史版本](#历史版本)
# FString
## 简介
JS默认没有一个统一的格式化输出方法,只能使用number类型自带的一些小数位保留方法和进制转换方法.很明显,这些在日常使用中是远远不够的.ES6新出的模板字符串给我灵感,让我想起Python的fstring.<br>
用过Python fstring和format的同学都知道格式化输出功能十分好用全面.然而JS却没有这样的好东西.没有条件创造条件,撸起袖子就是干.~~当前版本尚未实现Python的{str:format}语法(这绝对是JS的锅,找遍全网都没有更改模板字符串默认行为的方法).希望能够在今后找到一种更合理易用的语法.~~ 最新版本使用字符串解析的形式类似实现Python字符串模板格式化,详细用法见用法和测试.

## 此npm包支持格式化形式:
1. 指定变量对齐方式
2. 指定字符填充
3. 指定输出进制转换(二进制,八进制,十六进制)
4. 指定进制类型符号大小写显示
5. 指定是否标注正负号
6. 指定0填充位
7. 指定变量输出宽度
8. 指定千分位分隔符
9. 指定小数点后位数
10. 指定科学计数法输出

## 用法
引入包,并添加到基本类型的原型中
```JavaScript
import { injectFormatToString,f} from 'fstring'
injectFormatToString()
```
格式化字符串
风格一:
```JavaScript
let format = ':*<+20,.5g'
format.format('11456.15454')
format.format('53443.32455')
format.format('885673.367553')
...
```
风格二:
```JavaScript
let format = ':*<+20,.5g'
'11456.15454'.format(format)
'11456.15454'.format(':*<+20,.5g')

let money = '123456789.456789'
let format = ':15.2f'
console.log(`总金额为:${money.format(format)}元`)
...
```
风格三(最近更新,字符串模板格式化):
```JavaScript
let format = ':15.2f'
let money = '123456789.456789'
console.log(f`总金额为:{123456789.456789:${format}}元`)
console.log(f`总金额为:{${money}:15,.2f}元`)
console.log(f`总金额为:{${money}:${format}}元`)
console.log(f`数量{${'1'}}单价{${'15.32'}:}总金额为:{${money}:15,.2f}元`)
...
```
## 参数说明
引入的```injectFormatToString```函数没有参数只是给string类型添加一个format方法用来格式化字符串
String.format(str:string):string
format 方法接收一个string类型参数返回一个格式化后的string参数
格式描述符可以是字符串本身,也可以是format的参数,总之一定是有一个是格式描述符一个是被格式化的字符串.

### **格式描述符**
```[[fill]align][sign][#][0][width][tsep][dsep precision][type]```[^1]

fstring 格式描述符图解[^2]

![fstring 格式描述符图解](https://github.com/LiuQixuan/FString/blob/main/public/Python%20f-string.png?raw=true)

### **f-string 语法**\[^3\]
f-string采用 {content:format} 设置字符串格式，其中 content 是替换并填入字符串的内容，可以是变量、表达式或函数等，format是格式描述符。采用默认格式时不必指定 {:format}，如上面例子所示只写 {content} 即可。

关于格式描述符的详细语法及含义可查阅[Python官方文档](https://docs.python.org/3/library/string.html#format-string-syntax)，这里按使用时的先后顺序简要介绍常用格式描述符的含义与作用：

**对齐相关格式描述符**

|格式描述符	|含义与作用|
|:----:|:----:|
|<	|左对齐（字符串默认对齐方|式）|
|>	|右对齐（数值默认对齐方式）|
|^	|居中|

**数字符号相关格式描述符**

|格式描述符|	含义与作用|
|:----:|:----:|
|  +	|负数前加负号（-），正数前加正号（+）|
|  -	|负数前加负号（-），正数前不加任何符号（默认）|
|（空格）|	负数前加负号（-），正数前加一个空格|
>注：仅适用于数值类型。

**数字显示方式相关格式描述符**

|格式描述符|	含义与作用|
|:----:|:----:|
|#|切换数字显示方式|
>注1：仅适用于数值类型.

>注2：# 对不同数值类型的作用效果不同，详见下表：

|数值类型	|不加#（默认）|	加#|:区别|
|:----:|:----:|:----:|:----:|
|二进制整数	|'1111011'|	'0b1111011'	|开头是否显示 0b|
|八进制整数	|'173'|	'0o173'	|开头是否显示 0o|
|十进制整数	|'123'|	'123'	|无区别|
|十六进制整数（小写字母）	|'7b'|	'0x7b'|	开头是否显示 0x|
|十六进制整数（大写字母）	|'7B'	|'0X7B'|	开头是否显示 0X|

**宽度与精度相关格式描述符**

|格式描述符|含义与作用|
|:----:|:----:|
|width|	整数 width 指定宽度|
|0width|	整数 width 指定宽度，开头的 0 指定高位用 0 补足宽度|
|width.precision|	整数 width 指定宽度，整数 precision 指定显示精度|
>注1：0width 不可用于复数类型和非数值类型，width.precision 不可用于整数类型。

>注2：width.precision 用于不同格式类型的浮点数、复数时的含义也不同：用于 f、F、e、E 和 % 时 precision 指定的是小数点后的位数，用于 g 和 G 时 precision 指定的是有效数字位数（小数点前位数+小数点后位数）。

>注3：width.precision 除浮点数、复数外还可用于字符串，此时 precision 含义是只使用字符串中前 precision 位字符。

**千位分隔符相关格式描述符**

|格式描述符	|含义与作用|
|:----:|:----:|
|,	|使用,作为千位分隔符|
|_	|使用_作为千位分隔符|

>注1：若不指定 , 或 _，则f-string不使用任何千位分隔符，此为默认设置。 

>注2：, 仅适用于浮点数、复数与十进制整数：对于浮点数和复数，, 只分隔小数点前的数位。 

>注3：_ 适用于浮点数、复数与二、八、十、十六进制整数：对于浮点数和复数，_ 只分隔小数点前的数位；对于二、八、十六进制整数，固定从低位到高位每隔四位插入一个 _（十进制整数是每隔三位插入一个 _）。

**格式类型相关格式描述符**

|格式描述符|	含义与作用|	适用变量类型|
|:----:|:----:|:----:|
|s|	普通字符串格式|	字符串|
|b|	二进制整数格式|	整数|
|c|	字符格式，按unicode编码将整数转换为对应字符|	整数|
|d|	十进制整数格式|	整数|
|o|	八进制整数格式|	整数|
|x|	十六进制整数格式（小写字母）|	整数|
|X|	十六进制整数格式（大写字母）|	整数|
|e|	科学计数格式，以 e 表示 ×10^	|浮点数、复数、整数（自动转换为浮点数）|
|E|	与 e 等价，但以 E 表示 ×10^	|浮点数、复数、整数（自动转换为浮点数）|
|f|	定点数格式，默认精度（precision）是6|	浮点数、复数、整数（自动转换为浮点数）|
|F|	与 f 等价，但将 nan 和 inf 换成 NAN 和 INF|	浮点数、复数、整数（自动转换为浮点数）|
|g|	通用格式，小数用 f，大数用 e|	浮点数、复数、整数（自动转换为浮点数）|
|G|	与 G 等价，但小数用 F，大数用 E|	浮点数、复数、整数（自动转换为浮点数）|
|%|	百分比格式，数字自动乘上100后按 f 格式排版，并加 % 后缀|	浮点数、整数（自动转换为浮点数）|

## 测试

** 更新 **
>添加类似Python的f' '字符串模板格式化功能.
字符串模板格式化输出测试
```javascript

console.log(f`总金额为:{123456789.456789:${format}}元`)
//总金额为: 123,456,789.46元
let format = ':15.2f'
let money = '123456789.456789'
console.log(f`总金额为:{${money}:${format}}元`)
//总金额为: 123,456,789.46元
console.log(f`总金额为:{${money}:15,.2f}元`)
//总金额为: 123,456,789.46元
console.log(f`数量{${'1'}}单价{${'15.32'}:}总金额为:{${money}:15,.2f}元`)
//数量1单价15.32总金额为: 123,456,789.46元
```

基本格式化输出测试
```javascript
console.log('result:',':*<020,.5g'.format('456.15454'))
console.log('result:',':+#20b'.format('100'))
console.log('result:',':+#20o'.format('100'))
console.log('result:',':+#20x'.format('100'))
console.log('result:',':+#20X'.format('100'))
console.log('result:', ':+#020b'.format('100'))
console.log('result:', ':+#020o'.format('100'))
console.log('result:', ':+#020x'.format('100'))
console.log('result:', ':+#020X'.format('100'))
console.log('result:', ':#<-#020.2d'.format('1000000000'));

let format = ':*<+20,.5g'
'11456.15454'.format(format)
'11456.15454'.format(':*<+20,.5g')

let money = '123456789.456789'
format = ':15,.2f'
console.log(`总金额为:${money.format(format)}元`)
```
```json
result: 456.15**************
result:           +0b1100100
result:               +0o144
result:                +0x64
result:                +0X64
result: +0b00000000001100100
result: +0o00000000000000144
result: +0x00000000000000064
result: +0X00000000000000064
result: 1000000000##########
总金额为: 123,456,789.46元
```

异常定位测试
```json
SyntaxError: Bad format input:fillChar must one char of string.
Error point at:
[: #<#020d]
   ^
```
异常定位功能和node自带的异常检查功能类似,但是node的异常定位只能到行,此异常检查功能指定到出现异常的格式描述符的出错字符.

## 注意
填写格式描述符时一定严格按照顺序,要求不多写不错写不乱写,ECMAScript6对模板字符串有严格限制,如果你需要嵌入变量则模板字符串要求，需要将变量名写在${}内,且变量必须为string类型.故`` `\${1}` ``是非法的,如果遇到类似`类型“number”的参数不能赋给类型“string”的参数。`的报错,并不是我程序写的不好,而是ES6压根不支持内嵌除string外的其他类型的变量,如果非要使用可以`String(1)`强制类型转换成string或是调用其`toString()`方法.
## 优势
使用Python的fstring格式化参数,易学易用.掌握Python的fstring语法的同学几乎0成本上手.
格式化效果齐全广泛应用于日常开发,满足一般需求.
## 历史版本
-  ✅v0.0.1 发布FString包,实现基本功能,测试无明显bug,支持抛出异常.支持参数解析异常点定位,优化异常抛出提示.
-  ✅v0.0.2 修复1或0或其他整数格式化成定点浮点小数输出的异常,优化非科学表示法默认不进行普通小数转化,优化性能.
-  ✅v0.0.3 更新f标签函数,可以使用类似python的f''字符串模板,修复formatString传参为空或没有传参的情况,优化错误输出.
-  🟩v0.0.X 添加更多语法,增强鲁棒性,修复潜在BUG
-  
[^1]:https://www.python.org/dev/peps/pep-0378/#main-proposal-from-nick-coghlan-originally-called-proposal-i
[^2]:https://blog.csdn.net/u010516151/article/details/101272807
[^3]:https://blog.csdn.net/sunxb10/article/details/81036693


