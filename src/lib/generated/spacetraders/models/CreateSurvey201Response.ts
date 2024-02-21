/* tslint:disable */
/* eslint-disable */
/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CreateSurvey201ResponseData } from './CreateSurvey201ResponseData';
import {
    CreateSurvey201ResponseDataFromJSON,
    CreateSurvey201ResponseDataFromJSONTyped,
    CreateSurvey201ResponseDataToJSON,
} from './CreateSurvey201ResponseData';

/**
 * 
 * @export
 * @interface CreateSurvey201Response
 */
export interface CreateSurvey201Response {
    /**
     * 
     * @type {CreateSurvey201ResponseData}
     * @memberof CreateSurvey201Response
     */
    data: CreateSurvey201ResponseData;
}

/**
 * Check if a given object implements the CreateSurvey201Response interface.
 */
export function instanceOfCreateSurvey201Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CreateSurvey201ResponseFromJSON(json: any): CreateSurvey201Response {
    return CreateSurvey201ResponseFromJSONTyped(json, false);
}

export function CreateSurvey201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSurvey201Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CreateSurvey201ResponseDataFromJSON(json['data']),
    };
}

export function CreateSurvey201ResponseToJSON(value?: CreateSurvey201Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CreateSurvey201ResponseDataToJSON(value.data),
    };
}

