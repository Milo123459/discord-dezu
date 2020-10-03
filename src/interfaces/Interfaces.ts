import * as Discord from 'discord.js';
import { PathLike } from 'fs';
import Logger from '../modules/Logger';
export type ArgummentType = 'string' | 'number' | 'boolean';
export type MatchType = 'rest' | 'argument';
export type Prefix = string;
export type CommandRunsIn = 'guild' | 'dm';
export type Owner = string | number;
export type DezuLogger = boolean;
export interface ArgumentOptions {
	name: string;
	type: ArgummentType;
	match: MatchType;
}
export interface Argument {
	value: string | number | boolean;
	name: string;
}
export interface RunFunction {
	(message: Discord.Message, args?: Array<Argument>): unknown;
}
export interface CommandArguments {
	[key: string]: string | number | boolean;
}
export interface CommandOptions {
	name: string;
	arguments?: Array<ArgumentOptions>;
	runsIn?: Array<CommandRunsIn> | CommandRunsIn;
}
export interface CommandHandlerOptions {
	path: PathLike;
	loadOnReady?: boolean;
	logOnLoad?: boolean;
}
export interface EventHandlerOptions {
	path: PathLike;
	logOnLoad?: boolean;
}
export interface ClientOptions {
	token: string;
	prefix: Array<Prefix> | Prefix;
	commandHandler: CommandHandlerOptions;
	eventHandler?: EventHandlerOptions;
	owners?: Array<Owner> | Owner;
	clientOptions?: Discord.ClientOptions;
	useDezuLogger?: DezuLogger;
}
export interface ClientDezu {
	options: ClientOptions;
	logger: Logger;
}
export interface Anything {
	[key: string]: any;
}
export interface Dezu {
	logger?: Logger;
	options?: ClientOptions;
}
