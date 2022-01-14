const express = require('express');
require('dotenv').config();
const getRepos = require('./utils/getRepos');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    const teste = await getRepos('takenet', 'C#')
    return res.status(200).json(teste)
})

app.listen(PORT, () => console.log('Is Alive!!!'));
