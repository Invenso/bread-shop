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


export interface Period {
	period: number;
	timeUnit: Period.TimeUnitEnum;
}
export namespace Period {
	export type TimeUnitEnum = 'seconds' | 'minutes' | 'hours' | 'days';
	export const TimeUnitEnum = {
		Seconds: 'seconds' as TimeUnitEnum,
		Minutes: 'minutes' as TimeUnitEnum,
		Hours: 'hours' as TimeUnitEnum,
		Days: 'days' as TimeUnitEnum
	};
}
