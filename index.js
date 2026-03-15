const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('AutoStack E2E Test Success!'));
app.listen(port, () => console.log('App listening on port ' + port));
