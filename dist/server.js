"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = app_1.appObj.app.listen(config.server.port, () => {
    console.log(`App running on port ${config.server.port}`);
});
