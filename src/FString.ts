/**
 * ------------------------------------
 * File: d:\My Documents\Documents\GitHub\FString\src\FString.ts
 * Project: d:\My Documents\Documents\GitHub\FString
 * Created Date: 2021-05-24  10:55:05
 * Author: LiuQixuan(liuqixuan@hotmail.com)
 * -----
 * Last Modified:  2021-05-24  1:06:27
 * Modified By: LiuQixuan
 * -----
 * Copyright 2020 - 2021 AIUSoft by LiuQixuan
 * ------------------------------------
 */

import { parseFString, TextTemplate, DictArr} from "./getTextTemplate"
import { injectFormatToString, formatByParam} from "./FStringFormat"

//type declare
//TextTemplate= [Array < string >, ...DictArr]
//DictArr = Array < { [key: string]: string } >

function f(strArr: TemplateStringsArray, ...values: Array<string>): string{
  let s:TextTemplate = parseFString(strArr, ...values)
  let stringArr = s[0]
  let formatObject = s.slice(1) as DictArr
  let formatedStrArr = formatObject.map((dict:{[key:string]:string},index:number)=>{
    const raw = Object.keys(dict)[0],formatString=dict[raw]
    return formatByParam(raw, ":".concat(formatString))
  })
  
  let resultStr = stringArr[0]
  for (let i = 1; i < stringArr.length; ++i) {
    resultStr += formatedStrArr[i - 1]
    resultStr += stringArr[i]
  }
  return resultStr
}

export {f,injectFormatToString}