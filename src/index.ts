import "reflect-metadata";
import Express from "express";
import router from "./routes";
import { createConnection } from "typeorm";

const app = Express()
createConnection()

app.use(Express.json())
app.use(router)

app.listen(3000, () => { return console.log('Server started on port 3333') })



