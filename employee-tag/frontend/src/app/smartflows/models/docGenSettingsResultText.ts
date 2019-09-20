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


export interface DocGenSettingsResultText {
	/**
	 * Specifies the encoding to use
	 */
	encoding?: string;
	/**
	 * Whether to output headers and footers
	 */
	exportHeadersFooters?: boolean;
	/**
	 * The string to use as a paragraph break
	 */
	paragraphBreak?: string;
	/**
	 * Attempt to preserve layout of tables
	 */
	preserveTableLayout?: boolean;
	/**
	 * Simplify list labels in case of complex label formatting not being adequately represented by plain text. If set to true, numbered list labels are written in simple numeric format and itemized list labels as simple ASCII characters
	 */
	simplifyListLabels?: boolean;
}
