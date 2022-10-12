import { Request, Response, Router } from "express";

const route = Router();

// fetch all tenants
route.get("/", (req: Request, res: Response) => res.send("Fetch All Tenant"));

// fetch a tenant
route.get("/:id", (req: Request, res: Response) =>
  res.send("Fetch Tenant By ID")
);

// create a tenant - add tenant data
route.post("/", (req: Request, res: Response) => res.send("Create Tenant"));

// login tenant - they can change their data
route.post("/login", (req: Request, res: Response) => res.send("Login Tenant"));

// update - tenant may update only their email and phone number
// this applies for the next of kins
route.put("/:id", (req: Request, res: Response) => res.send("Update Tenant"));

// delete tenant data - admin privileges is needed
route.delete("/:id", (req: Request, res: Response) =>
  res.send("Delete Tenant")
);

export default route;
