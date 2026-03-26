import { Router } from "express";
import { getAllAstronauts, getAstronautById, createAstronaut,
    updateAstronaut, deleteAstronaut
 } from '../controllers/astronautsController';

const router = Router();

router.get("/", getAllAstronauts);
router.get("/:id", getAstronautById);
router.post("/", createAstronaut);
router.patch("/:id", updateAstronaut);
router.delete("/:id", deleteAstronaut);

export { router };
