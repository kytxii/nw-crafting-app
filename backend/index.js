import express from "express";
import sequelize from "./db";
import itemRoutes from "./routes/itemRoutes";
import adminRouter from "./admin";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/admin", adminRouter); // Use AdminJS router
app.use("/items", itemRoutes); // Use item routes

// Sync database and start server
sequelize.sync({ force: true }).then(() => {
  console.log("Database synced successfully!");
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Admin panel is available at http://localhost:${port}/admin`);
  });
});
