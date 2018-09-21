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
import { DependencyMapping } from './dependencyMapping';
import { IdWithName } from './idWithName';


export interface RestoreContext {
    archive?: string;
    dependenciesMap?: Array<DependencyMapping>;
    overwriteExisting?: boolean;
    includeType?: RestoreContext.IncludeTypeEnum;
    listedItems?: Array<IdWithName>;
}
export namespace RestoreContext {
    export type IncludeTypeEnum = 'all' | 'listed' | 'allButListed';
    export const IncludeTypeEnum = {
        All: 'all' as IncludeTypeEnum,
        Listed: 'listed' as IncludeTypeEnum,
        AllButListed: 'allButListed' as IncludeTypeEnum
    }
}
