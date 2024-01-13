const express = require('express')
let pokemons = require('./mock-pokemon');

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello again, Express!👋'))

app.get('/api/pokemons/:id', (req,res) => {
	const id = parseInt(req.params.id)
	const pokemon= pokemons.find(pokemon => pokemon.id === id)
	res.send(`voici le pokemon demandé n°${id}: ${pokemon.name}.`)
})

app.get('/api/pokemons', (req,res) => {
	res.send(`il y a ${pokemons.length} pokemons dans le pokedex, pour le moment`)
})

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))
