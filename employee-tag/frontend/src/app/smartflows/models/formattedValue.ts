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


export interface FormattedValue {
	value?: string;
	type?: FormattedValue.TypeEnum;
	pattern?: string;
	result?: string;
}

export namespace FormattedValue {
	export type TypeEnum = 'number' | 'date' | 'time' | 'dateTime';
	export const TypeEnum = {
		Number: 'number' as TypeEnum,
		Date: 'date' as TypeEnum,
		Time: 'time' as TypeEnum,
		DateTime: 'dateTime' as TypeEnum
	}
}
