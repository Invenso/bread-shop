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


export interface SystemInfoDefaults {
	esignProvider?: SystemInfoDefaults.EsignProviderEnum;
}
export namespace SystemInfoDefaults {
	export type EsignProviderEnum = 'DocuSign' | 'Sertifi';
	export const EsignProviderEnum = {
		DocuSign: 'DocuSign' as EsignProviderEnum,
		Sertifi: 'Sertifi' as EsignProviderEnum
	};
}
