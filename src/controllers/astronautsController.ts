import { Request, Response } from "express";
import { findAll, findOne, create, update, remove } from "../services/astronautsService";

const getAllAstronauts = (req: Request, res: Response) => {
    const country = req.query.country as string | undefined;
    const astronauts = findAll(country);
    res.json(astronauts);
};

const getAstronautById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const astronaut = findOne(id);

    if (!astronaut) {
        return res.status(404).json({error: "Информация не найдена!"});
    }

    res.json(astronaut);
};

const createAstronaut = (req: Request, res: Response) => {
    const { name, country, mission, status, birthDate } = req.body;

    if (!name || !country || !mission || !status || !birthDate) {
        return res.status(400).json({error: "Не все поля заполнены!"});
    }

    const newAstronaut = create({ name, country, mission, status, birthDate });
    res.status(201).json(newAstronaut);
};

const updateAstronaut = (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const updatedAstronaut = update(id, req.body);

    if (!updatedAstronaut) {
        return res.status(404).json({error: "Информация не найдена!"});
    }

    res.json(updatedAstronaut);
};

const deleteAstronaut = (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const success = remove(id);

    if (!success) {
        return res.status(404).json({error: "Информация не найдена!"});
    }

    res.status(204).send();
};

export {getAllAstronauts, getAstronautById, createAstronaut, updateAstronaut, deleteAstronaut};
