import dotenv from "dotenv";
import express from "express";

import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use("/api/v1/auth");
