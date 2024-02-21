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
/**
 * Meta details for pagination.
 * @export
 * @interface Meta
 */
export interface Meta {
    /**
     * Shows the total amount of items of this kind that exist.
     * @type {number}
     * @memberof Meta
     */
    total: number;
    /**
     * A page denotes an amount of items, offset from the first item. Each page holds an amount of items equal to the `limit`.
     * @type {number}
     * @memberof Meta
     */
    page: number;
    /**
     * The amount of items in each page. Limits how many items can be fetched at once.
     * @type {number}
     * @memberof Meta
     */
    limit: number;
}

/**
 * Check if a given object implements the Meta interface.
 */
export function instanceOfMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "page" in value;
    isInstance = isInstance && "limit" in value;

    return isInstance;
}

export function MetaFromJSON(json: any): Meta {
    return MetaFromJSONTyped(json, false);
}

export function MetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Meta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total': json['total'],
        'page': json['page'],
        'limit': json['limit'],
    };
}

export function MetaToJSON(value?: Meta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total': value.total,
        'page': value.page,
        'limit': value.limit,
    };
}

