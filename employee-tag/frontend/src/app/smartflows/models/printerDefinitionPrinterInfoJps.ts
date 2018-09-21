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
import { PrinterDefinitionPrinterInfoJpsPaperSources } from './printerDefinitionPrinterInfoJpsPaperSources';


export interface PrinterDefinitionPrinterInfoJps {
    supported?: Array<PrinterDefinitionPrinterInfoJps.SupportedEnum>;
    paperSources?: Array<PrinterDefinitionPrinterInfoJpsPaperSources>;
    paperSizes?: Array<string>;
}
export namespace PrinterDefinitionPrinterInfoJps {
    export type SupportedEnum = 'collate' | 'duplexingTwoSidedLongEdge' | 'duplexingTwoSidedShortEdge' | 'chromacityColor' | 'orientation';
    export const SupportedEnum = {
        Collate: 'collate' as SupportedEnum,
        DuplexingTwoSidedLongEdge: 'duplexingTwoSidedLongEdge' as SupportedEnum,
        DuplexingTwoSidedShortEdge: 'duplexingTwoSidedShortEdge' as SupportedEnum,
        ChromacityColor: 'chromacityColor' as SupportedEnum,
        Orientation: 'orientation' as SupportedEnum
    }
}
