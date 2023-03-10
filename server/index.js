import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from './routes/client';
import generalRoutes from './routes/general';
import managementRoutes from './routes/management';
import salesRoutes from './routes/sales';

/* CONFIGURATION */ 
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())


/* ROUTES  */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/mamagement", managementRoutes);
app.use('sales', salesRoutes);