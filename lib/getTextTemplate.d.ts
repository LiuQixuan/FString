export declare type DictArr = Array<{
    [key: string]: string;
}>;
export declare type TextTemplate = [Array<string>, ...DictArr];
export declare function parseFString(strArr: TemplateStringsArray, ...values: Array<string>): TextTemplate;
//# sourceMappingURL=getTextTemplate.d.ts.map