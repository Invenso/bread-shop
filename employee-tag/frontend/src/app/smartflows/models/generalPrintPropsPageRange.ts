/**
 * XperiDo
 * This describes the REST api for one XperiDo project 
 *
 * OpenAPI spec version: 4.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface GeneralPrintPropsPageRange {
    type?: GeneralPrintPropsPageRange.TypeEnum;
    from?: number;
    to?: number;
}
export namespace GeneralPrintPropsPageRange {
    export type TypeEnum = 'default' | 'allPages' | 'somePages';
    export const TypeEnum = {
        Default: 'default' as TypeEnum,
        AllPages: 'allPages' as TypeEnum,
        SomePages: 'somePages' as TypeEnum
    }
}
