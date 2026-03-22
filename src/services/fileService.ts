import fs from "fs";

const readData = (filePath: string) => {
    try {
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        console.error("Ошибка чтения файла: ", err);
        return [];
    }
};

const writeData = (filePath: string, data: object[]) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    } catch (err) {
        console.error("Ошибка записи в файл: ", err);
    }
};

export {readData, writeData};