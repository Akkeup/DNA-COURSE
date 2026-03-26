import express, { Request, Response, NextFunction} from "express";
import { router as astronautRouter } from "./routes/astronauts";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.use("/astronauts", astronautRouter);

app.use((req: Request, res: Response) => {
    res.status(404).json({error: "Маршрут не найден!"});
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({error: "Внутренная ошибка сервера"});
});

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу http://localhost:${PORT}`);
});