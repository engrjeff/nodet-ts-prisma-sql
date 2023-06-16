import * as dotenv from "dotenv";

dotenv.config();

import express from "express";
import { errorHandler } from "./middlewares/error-handler";
import { authenticate } from "./middlewares/authenticate";

import userRouter from "./feature/user/router";
import categoryRouter from "./feature/category/router";

const PORT = parseInt(process.env.PORT!);

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// health check
app.get("/health-check", (req, res) => {
  res.send("API is OK");
});

app.use(authenticate);

// routes
app.use("/users", userRouter);
app.use("/categories", categoryRouter);

// error handler
app.use(errorHandler);

const server = app.listen(PORT, () =>
  console.log(`Server running at PORT ${PORT}`)
);

server.on("unhandledRejection", (err) => {
  console.log(err);

  // process.exit(1);
});
