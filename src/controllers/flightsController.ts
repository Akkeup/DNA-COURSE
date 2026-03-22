import { Request, Response } from "express";
import { findAll, findOne, create, update, remove } from "../services/flightsService";

const getAllFlights = (req: Request, res: Response) => {
    const name = req.query.name as string | undefined;
    const flights = findAll(name);
    res.json(flights);
};

const getFlightByid = (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const flight = findOne(id);

    if (!flight) {
        return res.status(404).json({error: "Информация не найдена!"});
    }

    res.json(flight);
};

const createFlight = (req: Request, res: Response) => {
    const { name, destination, status, launchDate } = req.body;

    if (!name || !destination || !status || !launchDate) {
        return res.status(400).json({error: "Не все поля заполнены!"});
    }

    const newFlight = create({ name, destination, status, launchDate });
    res.status(201).json(newFlight);
};

const updateFlight = (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const updatedFlight = update(id, req.body);

    if (!updatedFlight) {
        return res.status(404).json({error: "Информация не найдена!"}); 
    }

    res.json(updatedFlight);
};

const deleteFlight = (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const success = remove(id);

    if (!success) {
        return res.status(404).json({error: "Информация не найдена!"});
    }

    res.status(204).send();
};

export {getAllFlights, getFlightByid, createFlight, updateFlight, deleteFlight};