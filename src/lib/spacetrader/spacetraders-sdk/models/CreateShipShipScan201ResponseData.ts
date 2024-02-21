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
import type { Cooldown } from './Cooldown';
import {
    CooldownFromJSON,
    CooldownFromJSONTyped,
    CooldownToJSON,
} from './Cooldown';
import type { ScannedShip } from './ScannedShip';
import {
    ScannedShipFromJSON,
    ScannedShipFromJSONTyped,
    ScannedShipToJSON,
} from './ScannedShip';

/**
 * 
 * @export
 * @interface CreateShipShipScan201ResponseData
 */
export interface CreateShipShipScan201ResponseData {
    /**
     * 
     * @type {Cooldown}
     * @memberof CreateShipShipScan201ResponseData
     */
    cooldown: Cooldown;
    /**
     * List of scanned ships.
     * @type {Array<ScannedShip>}
     * @memberof CreateShipShipScan201ResponseData
     */
    ships: Array<ScannedShip>;
}

/**
 * Check if a given object implements the CreateShipShipScan201ResponseData interface.
 */
export function instanceOfCreateShipShipScan201ResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cooldown" in value;
    isInstance = isInstance && "ships" in value;

    return isInstance;
}

export function CreateShipShipScan201ResponseDataFromJSON(json: any): CreateShipShipScan201ResponseData {
    return CreateShipShipScan201ResponseDataFromJSONTyped(json, false);
}

export function CreateShipShipScan201ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateShipShipScan201ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cooldown': CooldownFromJSON(json['cooldown']),
        'ships': ((json['ships'] as Array<any>).map(ScannedShipFromJSON)),
    };
}

export function CreateShipShipScan201ResponseDataToJSON(value?: CreateShipShipScan201ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cooldown': CooldownToJSON(value.cooldown),
        'ships': ((value.ships as Array<any>).map(ScannedShipToJSON)),
    };
}

