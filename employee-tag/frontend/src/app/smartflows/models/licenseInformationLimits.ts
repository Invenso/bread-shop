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
import { LicenseInformationLimitsDocuments } from './licenseInformationLimitsDocuments';
import { LicenseInformationLimitsPacks } from './licenseInformationLimitsPacks';
import { LicenseInformationLimitsUsers } from './licenseInformationLimitsUsers';


export interface LicenseInformationLimits { 
    users?: LicenseInformationLimitsUsers;
    documents?: LicenseInformationLimitsDocuments;
    packs?: LicenseInformationLimitsPacks;
}
