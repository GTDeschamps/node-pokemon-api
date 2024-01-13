const express = require('express')
const {success} = require('./helper.js')
let pokemons = require('./mock-pokemon');

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello again, Express!👋'))

//premier point de terminaison pour appeler un pokémon de la liste
app.get('/api/pokemons/:id', (req,res) => {
	const id = parseInt(req.params.id)
	const pokemon= pokemons.find(pokemon => pokemon.id === id)
	const message = 'Un pokémon à été trouvé:'
	res.json(success(message, pokemon))
})

//nouveau point de terminaison , affichant l'ensemble de la liste de pokémons'
app.get('/api/pokemons', (req,res) => {
	const message = 'voici la liste des pokémons enregistré dans votre pokédex:'
	res.json(success(message, pokemons))
})

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))
