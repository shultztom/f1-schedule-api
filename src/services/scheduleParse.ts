const parseJsonFile = (calPath: string, fileName: string) => {
    const json = require(`${calPath}/${fileName}`);

    const formattedData = json.MRData.RaceTable;
    return formattedData;
}


export {
    parseJsonFile
}