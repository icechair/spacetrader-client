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
import type { ShipType } from './ShipType';
import {
    ShipTypeFromJSON,
    ShipTypeFromJSONTyped,
    ShipTypeToJSON,
} from './ShipType';

/**
 * 
 * @export
 * @interface ShipyardShipTypesInner
 */
export interface ShipyardShipTypesInner {
    /**
     * 
     * @type {ShipType}
     * @memberof ShipyardShipTypesInner
     */
    type: ShipType;
}

/**
 * Check if a given object implements the ShipyardShipTypesInner interface.
 */
export function instanceOfShipyardShipTypesInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ShipyardShipTypesInnerFromJSON(json: any): ShipyardShipTypesInner {
    return ShipyardShipTypesInnerFromJSONTyped(json, false);
}

export function ShipyardShipTypesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipyardShipTypesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': ShipTypeFromJSON(json['type']),
    };
}

export function ShipyardShipTypesInnerToJSON(value?: ShipyardShipTypesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': ShipTypeToJSON(value.type),
    };
}
