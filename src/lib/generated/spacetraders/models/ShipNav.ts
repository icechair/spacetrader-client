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
import type { ShipNavFlightMode } from './ShipNavFlightMode';
import {
    ShipNavFlightModeFromJSON,
    ShipNavFlightModeFromJSONTyped,
    ShipNavFlightModeToJSON,
} from './ShipNavFlightMode';
import type { ShipNavRoute } from './ShipNavRoute';
import {
    ShipNavRouteFromJSON,
    ShipNavRouteFromJSONTyped,
    ShipNavRouteToJSON,
} from './ShipNavRoute';
import type { ShipNavStatus } from './ShipNavStatus';
import {
    ShipNavStatusFromJSON,
    ShipNavStatusFromJSONTyped,
    ShipNavStatusToJSON,
} from './ShipNavStatus';

/**
 * The navigation information of the ship.
 * @export
 * @interface ShipNav
 */
export interface ShipNav {
    /**
     * The symbol of the system.
     * @type {string}
     * @memberof ShipNav
     */
    systemSymbol: string;
    /**
     * The symbol of the waypoint.
     * @type {string}
     * @memberof ShipNav
     */
    waypointSymbol: string;
    /**
     * 
     * @type {ShipNavRoute}
     * @memberof ShipNav
     */
    route: ShipNavRoute;
    /**
     * 
     * @type {ShipNavStatus}
     * @memberof ShipNav
     */
    status: ShipNavStatus;
    /**
     * 
     * @type {ShipNavFlightMode}
     * @memberof ShipNav
     */
    flightMode: ShipNavFlightMode;
}

/**
 * Check if a given object implements the ShipNav interface.
 */
export function instanceOfShipNav(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "systemSymbol" in value;
    isInstance = isInstance && "waypointSymbol" in value;
    isInstance = isInstance && "route" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "flightMode" in value;

    return isInstance;
}

export function ShipNavFromJSON(json: any): ShipNav {
    return ShipNavFromJSONTyped(json, false);
}

export function ShipNavFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipNav {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'systemSymbol': json['systemSymbol'],
        'waypointSymbol': json['waypointSymbol'],
        'route': ShipNavRouteFromJSON(json['route']),
        'status': ShipNavStatusFromJSON(json['status']),
        'flightMode': ShipNavFlightModeFromJSON(json['flightMode']),
    };
}

export function ShipNavToJSON(value?: ShipNav | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'systemSymbol': value.systemSymbol,
        'waypointSymbol': value.waypointSymbol,
        'route': ShipNavRouteToJSON(value.route),
        'status': ShipNavStatusToJSON(value.status),
        'flightMode': ShipNavFlightModeToJSON(value.flightMode),
    };
}

