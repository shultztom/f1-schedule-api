import express, { Request, Response } from 'express';
const router = express.Router();
import fs from "fs";
import path from "path";
import { parseJsonFile } from "../services/scheduleParse";

// Route Handlers
const getAllCalendars = async (req: Request, res: Response) => {
    const data = [];

    const calPath = path.join(__dirname, '..', 'calendars');
    const files = fs.readdirSync(calPath);

    for(const fileName of files){
        const formattedData = parseJsonFile(calPath, fileName);
        data.push(formattedData)
    }

    return res.status(200).json({data: data});
}

const getCalendarByYear = async (req: Request, res: Response) => {
    const {year} = req.params;

    const calPath = path.join(__dirname, '..', 'calendars');
    let formattedData;
    try {
        formattedData = parseJsonFile(calPath, `${year}.json`);
    } catch (e: any) {
        return res.status(500).json("Issue getting data for provided year");
    }

    return res.status(200).json(formattedData);
}

// Map Routes
router.get("/", getAllCalendars)
router.get("/:year/year", getCalendarByYear)

export default router;