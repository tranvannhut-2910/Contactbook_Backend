const app = require("./app");
const config = require("./add/config");

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});