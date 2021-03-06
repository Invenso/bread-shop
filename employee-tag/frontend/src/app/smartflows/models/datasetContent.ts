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
import {DatasetCustomContent} from './datasetCustomContent';
import {DatasetDataProviderContent} from './datasetDataProviderContent';
import {DatasetExtendedContent} from './datasetExtendedContent';
import {DatasetFormContent} from './datasetFormContent';
import {DatasetSchemaContent} from './datasetSchemaContent';
import {DatasetStandardContent} from './datasetStandardContent';


export interface DatasetContent {
	type?: DatasetContent.TypeEnum;
	standardContent?: DatasetStandardContent;
	customContent?: DatasetCustomContent;
	schemaContent?: DatasetSchemaContent;
	formContent?: DatasetFormContent;
	dataProviderContent?: DatasetDataProviderContent;
	extendedContent?: DatasetExtendedContent;
}

export namespace DatasetContent {
	export type TypeEnum = 'standard' | 'custom' | 'schema' | 'extended' | 'form' | 'dataProvider';
	export const TypeEnum = {
		Standard: 'standard' as TypeEnum,
		Custom: 'custom' as TypeEnum,
		Schema: 'schema' as TypeEnum,
		Extended: 'extended' as TypeEnum,
		Form: 'form' as TypeEnum,
		DataProvider: 'dataProvider' as TypeEnum
	}
}
