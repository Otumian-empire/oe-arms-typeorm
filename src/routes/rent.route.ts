import { Request, Response, Router } from "express";

const route = Router();

// fetch all Rents
route.get("/", (req: Request, res: Response) => res.send("Fetch All Rent"));

// fetch a Rent by Rent id
route.get("/:id", (req: Request, res: Response) =>
  res.send("Fetch Rent By ID")
);

// create a Rent - add Rent data
route.post("/:id", (req: Request, res: Response) => res.send("Create Rent"));

// delete Rent data - admin privileges is needed
route.delete("/:id", (req: Request, res: Response) =>
  res.send("Delete Rent By ID")
);

export default route;
