import { Client } from 'discord.js';
import { ClientOptions, Dezu } from '../interfaces/Interfaces';
import defaults from 'lodash.defaults';
import Logger from '../modules/Logger';
class DezuClient extends Client {
	private dezu: Dezu = {};
	public constructor(options: ClientOptions) {
		super(options.clientOptions ? options.clientOptions : {});
		this.dezu.options = defaults(options, {
			owners: [],
			clientOptions: {},
			useDezuLogger: false,
		});
		this.dezu.logger = new Logger(this.dezu.options.useDezuLogger);
		this.dezu.forceLogger = new Logger(true);
	}
	public start(): void {
		this.dezu.logger.info(`Booting up..`);

		this.login(this.dezu.options.token)
			.then(() => this.dezu.logger.info(`Logging in...`))
			.catch((reason) => {
				this.dezu.forceLogger.error(reason.message);
				process.exit(1);
			});
		this.on('ready', () => this.dezu.logger.info(`${this.user.tag} is online.`));
	}
}
export default DezuClient;
new DezuClient({
	commandHandler: { path: '' },
	token: '',
	prefix: '',
	//useDezuLogger: true,
}).start();
