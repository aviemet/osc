/**
 * File generated by js-routes RubyVariables.GEM_VERSION
 * Based on Rails RubyVariables.RAILS_VERSION routes of RubyVariables.APP_CLASS
 */
declare type Optional<T> = {
    [P in keyof T]?: T[P] | null;
};
declare type BaseRouteParameter = string | boolean | Date | number;
declare type MethodRouteParameter = BaseRouteParameter | (() => BaseRouteParameter);
declare type ModelRouteParameter = {
    id: MethodRouteParameter;
} | {
    to_param: MethodRouteParameter;
} | {
    toParam: MethodRouteParameter;
};
declare type RequiredRouteParameter = BaseRouteParameter | ModelRouteParameter;
declare type OptionalRouteParameter = undefined | null | RequiredRouteParameter;
declare type QueryRouteParameter = OptionalRouteParameter | QueryRouteParameter[] | {
    [k: string]: QueryRouteParameter;
};
declare type RouteParameters = Record<string, QueryRouteParameter>;
declare type Serializable = Record<string, unknown>;
declare type Serializer = (value: Serializable) => string;
declare type RouteHelperExtras = {
    requiredParams(): string[];
    toString(): string;
};
declare type RequiredParameters<T extends number> = T extends 1 ? [RequiredRouteParameter] : T extends 2 ? [RequiredRouteParameter, RequiredRouteParameter] : T extends 3 ? [RequiredRouteParameter, RequiredRouteParameter, RequiredRouteParameter] : T extends 4 ? [
    RequiredRouteParameter,
    RequiredRouteParameter,
    RequiredRouteParameter,
    RequiredRouteParameter
] : RequiredRouteParameter[];
declare type RouteHelperOptions = RouteOptions & Record<string, OptionalRouteParameter>;
declare type RouteHelper<T extends number = number> = ((...args: [...RequiredParameters<T>, RouteHelperOptions]) => string) & RouteHelperExtras;
declare type RouteHelpers = Record<string, RouteHelper>;
declare type Configuration = {
    prefix: string;
    default_url_options: RouteParameters;
    special_options_key: string;
    serializer: Serializer;
};
interface RouterExposedMethods {
    config(): Configuration;
    configure(arg: Partial<Configuration>): Configuration;
    serialize: Serializer;
}
declare type KeywordUrlOptions = Optional<{
    host: string;
    protocol: string;
    subdomain: string;
    port: string | number;
    anchor: string;
    trailing_slash: boolean;
    params: RouteParameters;
}>;
declare type RouteOptions = KeywordUrlOptions & RouteParameters;
declare type PartsTable = Record<string, {
    r?: boolean;
    d?: OptionalRouteParameter;
}>;
declare type ModuleType = "CJS" | "AMD" | "UMD" | "ESM" | "DTS" | "NIL";
declare const RubyVariables: {
    PREFIX: string;
    DEPRECATED_GLOBBING_BEHAVIOR: boolean;
    DEPRECATED_FALSE_PARAMETER_BEHAVIOR: boolean;
    SPECIAL_OPTIONS_KEY: string;
    DEFAULT_URL_OPTIONS: RouteParameters;
    SERIALIZER: Serializer;
    ROUTES_OBJECT: RouteHelpers;
    MODULE_TYPE: ModuleType;
    WRAPPER: <T>(callback: T) => T;
};
declare const define: undefined | (((arg: unknown[], callback: () => unknown) => void) & {
    amd?: unknown;
});
declare const module: {
    exports: any;
} | undefined;
export const configure: RouterExposedMethods['configure'];

export const config: RouterExposedMethods['config'];

export const serialize: RouterExposedMethods['serialize'];

/**
 * Generates rails route to
 * /api/protocol/:id/execute(.:format)
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const apiExecuteProtocol: ((
  id: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /api/spotlights(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const apiSpotlights: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /api/users/:id/update_table_preferences(.:format)
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const apiUpdateTablePreferences: ((
  id: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /api/users/:id/update_user_preferences(.:format)
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const apiUpdateUserPreferences: ((
  id: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /api/users/:id(.:format)
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const apiUser: ((
  id: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /api/users(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const apiUsers: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /users/cancel(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const cancelUserRegistration: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /commands/:id(.:format)
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const command: ((
  id: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /commands(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const commands: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /controls/:id(.:format)
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const control: ((
  id: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /controls(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const controls: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /logout(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const destroyUserSession: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /commands/:id/edit(.:format)
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const editCommand: ((
  id: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /protocols/:id/edit(.:format)
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const editProtocol: ((
  id: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /screens/:slug/edit(.:format)
 * @param {any} slug
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const editScreen: ((
  slug: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /screens/edit(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const editScreens: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /servers/:id/edit(.:format)
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const editServer: ((
  id: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /users/:id/edit(.:format)
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const editUser: ((
  id: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /users/password/edit(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const editUserPassword: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /users/edit(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const editUserRegistration: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const home: ((
  options?: {} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /commands/new(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const newCommand: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /protocols/new(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const newProtocol: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /servers/new(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const newServer: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /users/new(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const newUser: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /users/confirmation/new(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const newUserConfirmation: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /users/password/new(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const newUserPassword: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /users/register(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const newUserRegistration: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /login(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const newUserSession: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /users/unlock/new(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const newUserUnlock: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /protocols/:id(.:format)
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const protocol: ((
  id: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /protocols(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const protocols: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const root: ((
  options?: {} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /screens/:slug(.:format)
 * @param {any} slug
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const screen: ((
  slug: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /screens(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const screens: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /servers/:id(.:format)
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const server: ((
  id: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /servers(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const servers: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /rails/active_storage/disk/:encoded_token(.:format)
 * @param {any} encodedToken
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const updateRailsDiskService: ((
  encodedToken: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /users/:id(.:format)
 * @param {any} id
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const user: ((
  id: RequiredRouteParameter,
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /users/confirmation(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const userConfirmation: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /users/password(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const userPassword: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /users(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const userRegistration: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /login(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const userSession: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /users/unlock(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const userUnlock: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

/**
 * Generates rails route to
 * /users(.:format)
 * @param {object | undefined} options
 * @returns {string} route path
 */
export const users: ((
  options?: {format?: OptionalRouteParameter} & RouteOptions
) => string) & RouteHelperExtras;

// By some reason this line prevents all types in a file
// from being automatically exported
export {};
