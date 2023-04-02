import express, { Express } from 'express';
import bodyParser from "body-parser";
import indexRouter from "./routes/index";
import calendar from "./routes/calendar";

// Express Config
const app: Express = express();
const port = 8080;
app.use(bodyParser.json());
app.use("/", indexRouter);
app.use("/calendar", calendar);


app.listen(port, async () => {
    console.log('Started API on Port ' + port);
});