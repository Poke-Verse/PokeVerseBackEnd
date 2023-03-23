const {data} = require('./pokedexData.json')

const seed = async () => {
    try {
        await data.sync({ force: true });
    } catch (error) {
        console.log(error)
    }

     for (let i = 0; i < data.pokemon.length, i++;) {
        Pokemon.create(seed.pokemon[i]);
    }
};

seed();