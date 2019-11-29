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
import {FlowExecutionStatus} from './flowExecutionStatus';
import {IdWithName} from './idWithName';


export interface FlowExecutionProgress {
    id?: string;
    percentage?: number;
    currentData?: IdWithName;
    message?: string;
    status?: FlowExecutionStatus;
    schema?: any;
    model?: any;
    form?: Array<any>;
}
