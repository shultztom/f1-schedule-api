import express, { Express } from 'express';
import bodyParser from "body-parser";
import indexRouter from "./routes/index";
import calendar from "./routes/calendar";
import helmet from "helmet";
import cors from "cors";

// Express Config
const app: Express = express();
const port = 8080;
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use("/", indexRouter);
app.use("/calendar", calendar);


app.listen(port, async () => {
    console.log('Started API on Port ' + port);
});