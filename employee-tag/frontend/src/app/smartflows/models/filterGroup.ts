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
import {FilterGroupNode} from './filterGroupNode';


export interface FilterGroup {
	type?: FilterGroup.TypeEnum;
	nodes?: Array<FilterGroupNode>;
}
export namespace FilterGroup {
	export type TypeEnum = 'and' | 'or';
	export const TypeEnum = {
		And: 'and' as TypeEnum,
		Or: 'or' as TypeEnum
	};
}
