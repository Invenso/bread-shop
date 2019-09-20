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
import {Archivable} from './archivable';
import {IdWithName} from './idWithName';


export interface ArchiveGeneral {
	createdAt?: string;
	createdBy?: IdWithName;
	purpose?: ArchiveGeneral.PurposeEnum;
	defaultConnectors?: Array<Archivable>;
}
export namespace ArchiveGeneral {
	export type PurposeEnum = 'export' | 'backup';
	export const PurposeEnum = {
		Export: 'export' as PurposeEnum,
		Backup: 'backup' as PurposeEnum
	};
}
