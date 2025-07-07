import App from "./app.js";
import "dotenv/config";

const port = process.env.PORT || 8080;

App.getHttpServer().listen(port, () => {
  console.log(`Servidor em: http://localhost:${port}`);
});
