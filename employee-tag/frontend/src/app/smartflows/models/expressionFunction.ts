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
import {ExpressionFunctionArguments} from './expressionFunctionArguments';


export interface ExpressionFunction {
	name: string;
	description?: string;
	helpLink?: string;
	categories?: Array<string>;
	varargs?: boolean;
	arguments?: Array<ExpressionFunctionArguments>;
}
