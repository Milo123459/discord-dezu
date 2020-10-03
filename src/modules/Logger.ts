import chalk from 'chalk';
import logSymbols from 'log-symbols';
class Logger {
	private _active: boolean = false;
	private chalk: chalk.Chalk = chalk.bold.underline.italic;
	public constructor(active: boolean) {
		this._active = active;
	}
	public success(message: any): boolean {
		if (!this._active) return false;
		console.log(`${logSymbols.success} ${this.chalk.green(message)}`);
	}
	public info(message: any): boolean {
		if (!this._active) return false;
		console.log(`${logSymbols.info} ${this.chalk.blue(message)}`);
	}
	public error(message: any): boolean {
		if (!this._active) return false;
		console.log(`${logSymbols.error} ${this.chalk.red(message)}`);
	}
	public warn(message: any): boolean {
		if (!this._active) return false;
		console.log(`${logSymbols.warning} ${this.chalk.yellow(message)}`);
	}
}
export default Logger;