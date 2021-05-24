/**
 * ------------------------------------
 * File: d:\My Documents\Documents\GitHub\FString\src\getTextTemplate.ts
 * Project: d:\My Documents\Documents\GitHub\FString
 * Created Date: 2021-05-08  10:53:39
 * Author: LiuQixuan(liuqixuan@hotmail.com)
 * -----
 * Last Modified:  2021-05-24  1:06:59
 * Modified By: LiuQixuan
 * -----
 * Copyright 2020 - 2021 AIUSoft by LiuQixuan
 * ------------------------------------
 */

export type DictArr = Array<{ [key: string]: string }>
export type TextTemplate = [Array<string>, ...DictArr]
export function parseFString(strArr: TemplateStringsArray, ...values: Array<string>): TextTemplate {
  let str = strArr[0]
  for (let i = 1; i < strArr.length; ++i) {
    str += values[i - 1]
    str += strArr[i]
  }
  // console.error("getTextTemplate",str)
  return textTemplate(str)
}
function textTemplate(templateStr: string): TextTemplate {
  const stringArr = templateStr.split(/\{.*?\}/g)
  const valueArr = templateStr.match(/(?<=\{)(.*?)(?=\})/g)
  const objectArr = valueArr?.map((str: string) => {
    str = str.replace(/[\{\}]/g, "").replace(/[:]+/, ':')
    // console.error("str:", str);
    let tmpArr: Array<string>
    if (str.search(':')===-1){
      tmpArr = [str,'']
    }else{
      tmpArr = str.split(":").map((str: string) => {
        if (str.search(/^['"]/) !== -1 && str.search(/['"]$/) !== -1) {
          str = str.slice(1, str.length - 1)
        }
        return str
      })
    }
    return Object.fromEntries([tmpArr])
  }) as DictArr
  return [stringArr, ...objectArr]
}
