const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).json('Hello from node.js!');
});

app.listen(PORT, () => {
    console.log(`Server launching on PORT: 3000`);
})

