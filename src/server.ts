import dotenv from 'dotenv';

import {config} from './config/config';
import {appExport} from './app';

dotenv.config()

const server = appExport.app.listen(config.server.port, () => {
    console.log(`App running on port ${config.server.port}`);
});