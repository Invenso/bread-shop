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
import {DocGenSettingsTemplateComposed} from './docGenSettingsTemplateComposed';
import {StandardTemplateDefinition} from './standardTemplateDefinition';


export interface DocGenSettingsTemplate {
	type?: DocGenSettingsTemplate.TypeEnum;
	displayName?: string;
	standard?: StandardTemplateDefinition;
	composed?: DocGenSettingsTemplateComposed;
}
export namespace DocGenSettingsTemplate {
	export type TypeEnum = 'standard' | 'composed';
	export const TypeEnum = {
		Standard: 'standard' as TypeEnum,
		Composed: 'composed' as TypeEnum
	};
}
