import AeroClient from "@aeroware/aeroclient";
import { EventHandler } from "@aeroware/aeroclient/dist/types";
import { TextChannel } from "discord.js";
import repl from "repl";
import AutoPoster from "topgg-autoposter";
import CONFIG from "../../config.json";
import mongo from "../utils/mongo";
import periodic from "../utils/periodic";

export default {
    name: "ready",
    once: true,
    async callback(this: AeroClient) {
        if (process.env.NODE_ENV !== "dev") {
            const ap = AutoPoster(process.env.topGGToken!, this);

            ap.on("posted", () => {
                this.logger.info("Posted Info to Top.gg.");
            });
        }

        process.on("unhandledRejection", (err: any) => {
            if (err) this.logger.error(err.stack || err.message);
            if (!CONFIG.ERROR_LOG) return;
            const channel = this.channels.cache.get(CONFIG.ERROR_LOG);
            if (channel instanceof TextChannel)
                channel.send(err.stack || err.message, { code: true });
            else throw new TypeError("errorLog in .env is not a TextChannel");
        });

        await mongo(this, process.env.mongoPath!);

        periodic(this);
    },
} as EventHandler;
