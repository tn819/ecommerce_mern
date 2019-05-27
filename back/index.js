const bodyParser = require('body-parser');
const cors = require('cors');

const app = require('express')();
const routes = require('./routes');

const PORT = 3002;

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});
