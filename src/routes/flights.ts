import { Router } from "express";
import { getAllFlights, getFlightByid, createFlight,
    updateFlight, deleteFlight
 } from '../controllers/flightsController';

const router = Router();

router.get("/", getAllFlights);
router.get("/:id", getFlightByid);
router.post("/", createFlight);
router.patch("/:id", updateFlight);
router.delete("/:id", deleteFlight);

export { router };