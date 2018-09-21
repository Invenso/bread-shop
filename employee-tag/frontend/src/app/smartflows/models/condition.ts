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
import { ConditionCheckValue } from './conditionCheckValue';
import { ConditionOccurrence } from './conditionOccurrence';


export interface Condition {
    description?: string;
    type?: Condition.TypeEnum;
    checkValue?: ConditionCheckValue;
    expression?: string;
    occurrence?: ConditionOccurrence;
}
export namespace Condition {
    export type TypeEnum = 'none' | 'occursOne' | 'occurrence' | 'checkValue' | 'expression';
    export const TypeEnum = {
        None: 'none' as TypeEnum,
        OccursOne: 'occursOne' as TypeEnum,
        Occurrence: 'occurrence' as TypeEnum,
        CheckValue: 'checkValue' as TypeEnum,
        Expression: 'expression' as TypeEnum
    }
}
