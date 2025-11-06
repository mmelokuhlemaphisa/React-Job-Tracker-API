import express  from "express";
import dotenv from "dotenv";
import applicationRoutes from "./routes/applicationRoutes";

import { testDBConnection } from "./config/database";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await testDBConnection();
  app.use(express.json());
  app.use("/api", applicationRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
};

startServer();
