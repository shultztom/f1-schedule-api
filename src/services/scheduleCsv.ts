import fs from "fs";
import {parse} from "papaparse";
import {set} from "lodash";

const parseFile = (calPath: string, fileName: string) => {
    const file = fs.readFileSync(`${calPath}/${fileName}`);
    const fileString = file.toString();
    const fileData = parse(fileString, {skipEmptyLines: true});

    const parsedData = fileData.data;

    // Get headers and assign to rest of data
    const headerRow: Array<string> = parsedData[0];
    const formattedData = [];
    for(let i = 1; i < parsedData.length; i++){
        const obj = {}
        for(let j = 0; j < headerRow.length; j++){
            set(obj, headerRow[j], parsedData[i][j]);
        }

        formattedData.push(obj);
    }

    return formattedData;
}

export {
    parseFile
}