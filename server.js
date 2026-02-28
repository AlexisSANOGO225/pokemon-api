const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Pokemon API" });
});

function getPokemonName(id) {
    const pokemons = ["Pikachu", "Bulbasaur", "Charmander"];
    return pokemons[id] || null;
}

module.exports = { app, getPokemonName };

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}