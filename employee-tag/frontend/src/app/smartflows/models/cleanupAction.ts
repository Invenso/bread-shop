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


export type CleanupAction = 'removeInternalSuccess' | 'removeOutputSuccess' | 'removeFullSuccess' | 'removeInternalError' | 'removeOutputError' | 'removeFullError' | 'removeInternalCancelled' | 'removeOutputCancelled' | 'removeFullCancelled' | 'removeInternalInterrupted' | 'removeOutputInterrupted' | 'removeFullInterrupted' | 'removeSelectFlow' | 'interruptWaiting' | 'interruptUserInput';

export const CleanupAction = {
    RemoveInternalSuccess: 'removeInternalSuccess' as CleanupAction,
    RemoveOutputSuccess: 'removeOutputSuccess' as CleanupAction,
    RemoveFullSuccess: 'removeFullSuccess' as CleanupAction,
    RemoveInternalError: 'removeInternalError' as CleanupAction,
    RemoveOutputError: 'removeOutputError' as CleanupAction,
    RemoveFullError: 'removeFullError' as CleanupAction,
    RemoveInternalCancelled: 'removeInternalCancelled' as CleanupAction,
    RemoveOutputCancelled: 'removeOutputCancelled' as CleanupAction,
    RemoveFullCancelled: 'removeFullCancelled' as CleanupAction,
    RemoveInternalInterrupted: 'removeInternalInterrupted' as CleanupAction,
    RemoveOutputInterrupted: 'removeOutputInterrupted' as CleanupAction,
    RemoveFullInterrupted: 'removeFullInterrupted' as CleanupAction,
    RemoveSelectFlow: 'removeSelectFlow' as CleanupAction,
    InterruptWaiting: 'interruptWaiting' as CleanupAction,
    InterruptUserInput: 'interruptUserInput' as CleanupAction
}
