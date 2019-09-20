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


export interface TemplateDataset {
	id?: string;
	displayName?: string;
	type?: TemplateDatasets.TypeEnum;
	primaryEntities?: Array<string>;
}
export namespace TemplateDatasets {
	export type TypeEnum = 'standard' | 'custom' | 'schema' | 'extended';
	export const TypeEnum = {
		Standard: 'standard' as TypeEnum,
		Custom: 'custom' as TypeEnum,
		Schema: 'schema' as TypeEnum,
		Extended: 'extended' as TypeEnum
	};
}
