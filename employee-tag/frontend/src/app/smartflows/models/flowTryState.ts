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


export interface FlowTryState {
	bodyTry?: Array<FlowZoneState>;
	error?: string;
	bodyCatch?: Array<FlowZoneState>;
}
