import { Request, Response, Router } from "express";

const route = Router();

// fetch all kins
route.get("/", (req: Request, res: Response) => res.send("Fetch All Kin"));

// fetch a kin
route.get("/:id", (req: Request, res: Response) => res.send("Fetch Kin By ID"));

// create a Kin - add Kin data
route.post("/", (req: Request, res: Response) => res.send("Create Kin"));

// update - Kin may update only their email and phone number
// this applies for the next of kins
route.put("/:id", (req: Request, res: Response) => res.send("Update Kin"));

// delete Kin data - admin privileges is needed
route.delete("/:id", (req: Request, res: Response) => res.send("Delete Kin"));

export default route;
