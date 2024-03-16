import { Hono } from "hono";
import { handle } from "hono/vercel";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.get("/msg", (c) => {
  return c.json({
    message: "Hello from Hono!",
  });
});

//app.get("/water", (c) => {
//  return c.html("<h1>Water from Hono</h1>");
//});

export default handle(app);
