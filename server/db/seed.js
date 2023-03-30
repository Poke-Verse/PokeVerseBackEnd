const data = require("./pokedexData.json");
const { Pokemon, User, db } = require("../db/index");

const seed = async () => {
    try {
        await db.sync({ force: true });
    } catch (error) {
        console.log(error);
    }

    // Adding pokemon
    let instancesNum = 0;
    for (let i = 0; i < data.pokemon.length; i++) {
        const pokemonInstance = await Pokemon.create(data.pokemon[i]);
        if (pokemonInstance instanceof Pokemon) {
            instancesNum++;
        }
    }
    console.log(`Seeded database, added ${instancesNum} pokemon instances.`);

    // Adding admins
    const admin1 = await User.create({
        firstName: "Admin1",
        lastName: null,
        email: "admin1@gmail.com",
        password: "Admin1-123",
        age: null,
        favoritePokemon: null,
        avatarImg: null,
        isAdmin: true,
    });

    const admin2 = await User.create({
        firstName: "Admin2",
        lastName: null,
        email: "admin2@gmail.com",
        password: "Admin2-123",
        age: null,
        favoritePokemon: null,
        avatarImg: null,
        isAdmin: true,
    });

    const admin3 = await User.create({
        firstName: "Admin3",
        lastName: null,
        email: "admin3@gmail.com",
        password: "Admin3-123",
        age: null,
        favoritePokemon: null,
        avatarImg: null,
        isAdmin: true,
    });

    if (
        admin1 instanceof User &&
        admin2 instanceof User &&
        admin3 instanceof User
    ) {
        console.log("Seeded database, added 3 admin instances");
    }
};

seed();
