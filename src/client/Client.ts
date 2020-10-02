import { Client } from "discord.js";
import { ClientOptions, ClientDezu } from "../interfaces/Interfaces";
import defaults from "lodash.defaults";
class DezuClient extends Client {
    private dezu: ClientDezu;
    public constructor (options: ClientOptions) {
        super(options.clientOptions ? options.clientOptions : {});
        this.dezu.options = defaults(options, { owners: [], clientOptions: {} })
    };
    public start(): void {
        
    }
};
export default DezuClient;