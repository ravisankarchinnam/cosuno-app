import express, {Application, Request, Response, NextFunction} from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import docs from "./docs";

// add the envitoment variables
dotenv.config();
const app: Application = express();

// handle json responses
app.use(bodyParser.json());

// Enable cors origin.
app.use(cors());

// Enable various security helpers.
app.use(helmet());

// enable logs
app.use(morgan("dev"));

// add api routes
app.use("/api", routes);

// add swagger open-api docs
app.use("/", swaggerUI.serve, swaggerUI.setup(docs()));

// add the routes

// aadd middleware and 404 handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const err: Error = new Error("Requested resource not found!");
  res.sendStatus(404);
  next(err);
});

const PORT: string | number = process.env.PORT || 3030;

//start the server
app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});
