import { Request, Response, Router } from "express";

const route = Router();

// create a admin - add admin data
route.post("/", (req: Request, res: Response) => res.send("Create Admin"));

// fetch an admin
route.get("/:id", (req: Request, res: Response) =>
  res.send("Fetch Admin by ID")
);

// login admin
route.post("/login", (req: Request, res: Response) => res.send("Login Admin"));

// update - admin may update only the email
route.put("/:id", (req: Request, res: Response) => res.send("Update Admin"));

// delete admin data - admin privileges is needed
route.delete("/:id", (req: Request, res: Response) => res.send("Delete Admin"));

export default route;
