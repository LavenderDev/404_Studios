const OAuthClient = require('disco-oauth');
require("dotenv").config()

const client = new OAuthClient(process.env.id, process.env.secret);
client.setRedirect(`${process.env.dashboardURL}/auth`);
client.setScopes('identify', 'guilds');

module.exports = client;