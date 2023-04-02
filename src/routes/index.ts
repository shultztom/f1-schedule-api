import express, { Request, Response } from 'express';
const router = express.Router();

// Route Handlers
const helloWorld = async (req: Request, res: Response) => {
    return res.status(200).json({message: "Hello World!"});
}

// Map Routes
router.get("/", helloWorld)

export default router;