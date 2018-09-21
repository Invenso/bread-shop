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
import {GcpVendorCapabilityRange} from './gcpVendorCapabilityRange';
import {GcpVendorCapabilitySelect} from './gcpVendorCapabilitySelect';
import {GcpVendorCapabilityTypedValue} from './gcpVendorCapabilityTypedValue';


export interface GcpVendorCapability {
	type?: GcpVendorCapability.TypeEnum;
	id?: string;
	displayName?: string;
	range?: GcpVendorCapabilityRange;
	select?: Array<GcpVendorCapabilitySelect>;
	typedValue?: GcpVendorCapabilityTypedValue;
}

export namespace GcpVendorCapability {
	export type TypeEnum = 'range' | 'select' | 'typedValue';
	export const TypeEnum = {
		Range: 'range' as TypeEnum,
		Select: 'select' as TypeEnum,
		TypedValue: 'typedValue' as TypeEnum
	}
}
