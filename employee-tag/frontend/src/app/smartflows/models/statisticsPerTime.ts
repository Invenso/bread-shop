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
import {StatisticsPerStatus} from './statisticsPerStatus';


export interface StatisticsPerTime {
	label?: string;
	perStatus?: Array<StatisticsPerStatus>;
	totalCount?: number;
}
