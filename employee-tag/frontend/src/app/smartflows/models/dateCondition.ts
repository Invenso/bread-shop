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
import {ConditionValue} from './conditionValue';


export interface DateCondition {
	operator?: DateCondition.OperatorEnum;
	value1?: ConditionValue;
	value2?: ConditionValue;
	valueFormat?: string;
}
export namespace DateCondition {
	export type OperatorEnum = 'between' | 'notBetween' | 'equalTo' | 'notEqualTo' | 'after' | 'before';
	export const OperatorEnum = {
		Between: 'between' as OperatorEnum,
		NotBetween: 'notBetween' as OperatorEnum,
		EqualTo: 'equalTo' as OperatorEnum,
		NotEqualTo: 'notEqualTo' as OperatorEnum,
		After: 'after' as OperatorEnum,
		Before: 'before' as OperatorEnum
	};
}
