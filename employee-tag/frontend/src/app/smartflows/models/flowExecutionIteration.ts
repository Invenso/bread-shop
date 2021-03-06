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
import {FlowZoneState} from './flowZoneState';


/**
 * Some flows are executed multiple times, these are the iterations
 */
export interface FlowExecutionIteration {
	/**
	 * Contrary to most IDs, this does not have to be a UUID, just a string unique to one execution
	 */
	id?: string;
	displayName?: string;
	report?: Array<FlowZoneState>;
}
