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


/**
 * The unique identifier of the trait.
 * @export
 */
export const FactionTraitSymbol = {
    Bureaucratic: 'BUREAUCRATIC',
    Secretive: 'SECRETIVE',
    Capitalistic: 'CAPITALISTIC',
    Industrious: 'INDUSTRIOUS',
    Peaceful: 'PEACEFUL',
    Distrustful: 'DISTRUSTFUL',
    Welcoming: 'WELCOMING',
    Smugglers: 'SMUGGLERS',
    Scavengers: 'SCAVENGERS',
    Rebellious: 'REBELLIOUS',
    Exiles: 'EXILES',
    Pirates: 'PIRATES',
    Raiders: 'RAIDERS',
    Clan: 'CLAN',
    Guild: 'GUILD',
    Dominion: 'DOMINION',
    Fringe: 'FRINGE',
    Forsaken: 'FORSAKEN',
    Isolated: 'ISOLATED',
    Localized: 'LOCALIZED',
    Established: 'ESTABLISHED',
    Notable: 'NOTABLE',
    Dominant: 'DOMINANT',
    Inescapable: 'INESCAPABLE',
    Innovative: 'INNOVATIVE',
    Bold: 'BOLD',
    Visionary: 'VISIONARY',
    Curious: 'CURIOUS',
    Daring: 'DARING',
    Exploratory: 'EXPLORATORY',
    Resourceful: 'RESOURCEFUL',
    Flexible: 'FLEXIBLE',
    Cooperative: 'COOPERATIVE',
    United: 'UNITED',
    Strategic: 'STRATEGIC',
    Intelligent: 'INTELLIGENT',
    ResearchFocused: 'RESEARCH_FOCUSED',
    Collaborative: 'COLLABORATIVE',
    Progressive: 'PROGRESSIVE',
    Militaristic: 'MILITARISTIC',
    TechnologicallyAdvanced: 'TECHNOLOGICALLY_ADVANCED',
    Aggressive: 'AGGRESSIVE',
    Imperialistic: 'IMPERIALISTIC',
    TreasureHunters: 'TREASURE_HUNTERS',
    Dexterous: 'DEXTEROUS',
    Unpredictable: 'UNPREDICTABLE',
    Brutal: 'BRUTAL',
    Fleeting: 'FLEETING',
    Adaptable: 'ADAPTABLE',
    SelfSufficient: 'SELF_SUFFICIENT',
    Defensive: 'DEFENSIVE',
    Proud: 'PROUD',
    Diverse: 'DIVERSE',
    Independent: 'INDEPENDENT',
    SelfInterested: 'SELF_INTERESTED',
    Fragmented: 'FRAGMENTED',
    Commercial: 'COMMERCIAL',
    FreeMarkets: 'FREE_MARKETS',
    Entrepreneurial: 'ENTREPRENEURIAL'
} as const;
export type FactionTraitSymbol = typeof FactionTraitSymbol[keyof typeof FactionTraitSymbol];


export function FactionTraitSymbolFromJSON(json: any): FactionTraitSymbol {
    return FactionTraitSymbolFromJSONTyped(json, false);
}

export function FactionTraitSymbolFromJSONTyped(json: any, ignoreDiscriminator: boolean): FactionTraitSymbol {
    return json as FactionTraitSymbol;
}

export function FactionTraitSymbolToJSON(value?: FactionTraitSymbol | null): any {
    return value as any;
}

