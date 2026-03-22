import path from "path";
import {readData, writeData} from "./fileService";
import {Flight} from "../types";

const dataFilePath = path.join(__dirname, "../data/flights.json")

const findAll = (name?: string) => {
    const flights = readData(dataFilePath) as Flight[];

    if (name) {
        return flights.filter(flight =>
            flight.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    return flights;
};

const findOne = (id: number) => {
    const flights = readData(dataFilePath) as Flight[];
    return flights.find(f => f.id === id);
}

const create = (flightData: Omit<Flight, "id">) => {
    const flights = readData(dataFilePath) as Flight[];

    const newId = flights.length > 0 
    ? Math.max(...flights.map(f => f.id)) + 1 : 1;

    const newFlight = {id: newId, ...flightData};
    flights.push(newFlight);
    writeData(dataFilePath, flights);

    return newFlight;
};

const update = (id: number, flightData: object) => {
    const flights = readData(dataFilePath) as Flight[];
    const index = flights.findIndex(f => f.id === id);

    if (index === -1) {
        return null;
    }

    flights[index] = {...flights[index], ...flightData};
    writeData(dataFilePath, flights);

    return flights[index];
};

const remove = (id: number) => {
    const flights = readData(dataFilePath) as Flight[];
    const filteredFlights = flights.filter(f => f.id !== id);

    if (filteredFlights.length === flights.length) {
        return false;
    }

    writeData(dataFilePath, filteredFlights);
    return true;
}

export {findAll, findOne, create, update, remove};