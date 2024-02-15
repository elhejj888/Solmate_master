import { createConnection } from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import cors from 'cors';
const mysql = require('mysql2')

import * as dotenv from 'dotenv';
dotenv.config({
    path: './.env.dev'
});

import logger from "./utils/logger";
import { PORT_NUMBER } from "./config";
const  { router } = require("./services");

createConnection().then(() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/', router); // Use app.use() instead of app.set()

    app.listen(PORT_NUMBER, () => {
        console.log(`Solmate Presale API has started on ${PORT_NUMBER} port.`);
    });
}).catch(error => console.error("TypeORM connection error: ", error));
