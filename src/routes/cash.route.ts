import { Request, Response, Router } from "express";

const route = Router();

// TODO: think about adding an endpoint for reading using the cash's ID
// TODO: Refactor the middleware placements. Make use of route.use([...,])

route.get("/", (req: Request, res: Response) => res.send("Fetch All Cash"));

// fetch an cash
route.get("/:id", (req: Request, res: Response) =>
  res.send("Fetch Cash By ID")
);

// create a cash - add cash data
route.post("/:id", (req: Request, res: Response) => res.send("Create Cash"));

// delete cash data - cash privileges is needed
route.delete("/:id", (req: Request, res: Response) => res.send("Delete Cash"));

export default route;
