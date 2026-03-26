import path from "path";
import {readData, writeData} from "./fileService";
import {Astronaut} from "../types";

const dataFilePath = path.join(__dirname, "../data/astronauts.json")

const findAll = (country?: string) => {
    const astronauts = readData(dataFilePath) as Astronaut[];

    if (country) {
        return astronauts.filter(astronaut =>
            astronaut.country.toLowerCase().includes(country.toLowerCase())
        );
    }

    return astronauts;
};

const findOne = (id: number) => {
    const astronauts = readData(dataFilePath) as Astronaut[];
    return astronauts.find(a => a.id === id);
};

const create = (astronautData: Omit<Astronaut, "id">) => {
    const astronauts = readData(dataFilePath) as Astronaut[];

    const newId = astronauts.length > 0
    ? Math.max(...astronauts.map(a => a.id)) + 1 : 1;

    const newAstronaut = {id: newId, ...astronautData};
    astronauts.push(newAstronaut);
    writeData(dataFilePath, astronauts);

    return newAstronaut;
};

const update = (id: number, astronautData: object) => {
    const astronauts = readData(dataFilePath) as Astronaut[];
    const index = astronauts.findIndex(a => a.id === id);

    if (index === -1) {
        return null;
    }

    astronauts[index] = {...astronauts[index], ...astronautData};
    writeData(dataFilePath, astronauts);

    return astronauts[index];
};

const remove = (id: number) => {
    const astronauts = readData(dataFilePath) as Astronaut[];
    const filteredAstronauts = astronauts.filter(a => a.id !== id);

    if (filteredAstronauts.length === astronauts.length) {
        return false;
    }

    writeData(dataFilePath, filteredAstronauts);
    return true;
}

export {findAll, findOne, create, update, remove};
