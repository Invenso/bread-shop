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
import {AuthenticationInfoLogin} from './authenticationInfoLogin';
import {AuthenticationInfoMethod} from './authenticationInfoMethod';
import {AuthenticationInfoOauth2} from './authenticationInfoOauth2';


export interface AuthenticationInfo {
    login?: AuthenticationInfoLogin;
    resetPasswordSupported?: boolean;
    oauth2?: Array<AuthenticationInfoOauth2>;
    methods?: Array<AuthenticationInfoMethod>;
}
