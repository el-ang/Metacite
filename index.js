require("dotenv").config();
const
    {Client, GatewayIntentBits} = require("discord.js"),
    client = new Client({intents: [GatewayIntentBits.Guilds]}),
    token = ((...store)=>{
        for(i in store){
            const {TOKEN} = store[i];
            if(TOKEN) return TOKEN;
        }
    })(process.env, require("./config.json"));

client.once("ready", () => console.log("Metacite Active!")).login(token);