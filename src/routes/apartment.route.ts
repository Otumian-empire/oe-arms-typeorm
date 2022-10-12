import { Request, Response, Router } from "express";

const route = Router();

// fetch all apartments
route.get("/", (req: Request, res: Response) =>
  res.send("Fetch All Apartment")
);

// fetch an apartment
route.get("/:id", (req: Request, res: Response) =>
  res.send("Fetch Apartment By ID")
);

// create a apartment - add apartment data
route.post("/", (req: Request, res: Response) => res.send("Create Apartment"));

// update - apartment may update the room_number, description, fee
route.put("/:id", (req: Request, res: Response) =>
  res.send("Update apartment")
);

// delete an apartment data - admin privileges is needed
route.delete("/:id", (req: Request, res: Response) =>
  res.send("Delete Apartment")
);

export default route;
