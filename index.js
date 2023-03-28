const app = require("./app");
const config = require("./Config/config");

const PORT = config.app.port;

app.listen(PORT, ()=>{
    console.log(`app is running on http://localhost:${PORT}`);
});