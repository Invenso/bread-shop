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
import { IdWithName } from './idWithName';


export interface Language {
    id?: string;
    displayName?: string;
    description?: string;
    createdAt?: string;
    createdBy?: IdWithName;
    modifiedAt?: string;
    modifiedBy?: IdWithName;
    code?: string;
    isDefault?: boolean;
    aliases?: Array<string>;
}
