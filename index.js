/*
  Do not change the line below. If you'd like to run code from this file, you may use the `examplePokemon` variable below to gain access to an array of pokemon.

  Keep in mind that your functions must still have and use a parameter for accepting all pokemon.
*/
const pokemon = require("./pokemon.js");
const examplePokemon = require("./pokemon.js");
// Do not change the line above.

/**
 * getAllPokemonNames()
 * -----------------------------
 * Returns all of  the names from an array of pokemon. If the inputted `pokemon` array is of length 1, throw an error with a message.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @returns {string[]|Error} An array of strings, which are pokemon names.
 *
 * NOTE: You must use the `.map()` method.
 * 
 * EXAMPLE:
 *  getAllPokemonNames(pokemon);
 *  //> [
  'bulbasaur',  'ivysaur',    'venusaur',
  'charmander', 'charmeleon', 'charizard',
  'squirtle',   'wartortle',  'blastoise',
  'caterpie',   'metapod',    'butterfree',
  'weedle',     'kakuna',     'beedrill',
  'pidgey',     'pidgeotto',  'pidgeot',
  'rattata',    'raticate',   'spearow',
  'fearow',     'ekans',      'arbok',
  'pikachu',    'raichu',     'sandshrew',
  'sandslash',  'nidoran-f',  'nidorina',
  'nidoqueen',  'nidoran-m',  'nidorino',
  'nidoking',   'clefairy',   'clefable',
  'vulpix',     'ninetales',  'jigglypuff',
  'wigglytuff'
];
 */

function getAllPokemonNames(pokemon) {
  if (!pokemon.length ){
    throw console.error
  }
  return pokemon.map(poke => poke.name)
}

/**
 * checkIfAnyPokemonWeighsLessThan()
 * -----------------------------
 * Returns a boolean, representing whether or not any of the pokemon weighs less than the provided weight.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @param {string} [weight= >18] - A weight. Defaults to a number higher than 18.
 * @returns {boolean} Returns `true` if a pokemon exists in the list that weighs less than the provided weight, otherwise returns `false`.
 *
 * NOTE: You must use the `.some()` method.
 *
 * EXAMPLE:
 *  checkIfAnyPokemonWeighsLessThan(pokemon, 60);
 *  //> true
 *
 * EXAMPLE:
 *  checkIfAnyPokemonWeighsLessThan(pokemon, 18);
 *  //> false
 */
function checkIfAnyPokemonWeighsLessThan(pokemon, w=19) {
  return pokemon.some(({weight}) => weight < w)
}

/**
 * findByName()
 * -----------------------------
 * Returns a pokemon object from an array of objects based on the name. If the name does not match any pokemon, return `null`.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @param {string} name - A unique `name`.
 * @returns {Object|null} The pokemon object with the matching `name` or null.
 *
 * NOTE: You must use the `.find()` method.
 * 
 * EXAMPLE:
 *  findByName(pokemon, 36);
 *  //> {
      // clefable
    };
 */
function findByName(pokemon, name) {
  return pokemon.find(pokeId => pokeId === name)
}

/**
 * filterByType()
 * -----------------------------
 * Returns all pokemon objects with a matching type. Case-insensitive. If no pokemon match the inputted `genre`, return `[]`.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @param {string} genre - The type of a pokemon. (e.g. "Fantasy")
 * @returns {Object[]} An array of pokemon where at least one of the types matches the `type` inputted.
 *
 * NOTE: You must use the `.filter()` method.
 * 
 * EXAMPLE:
 *  filterByType(pokemon, "water");
 *  //> [
      {
        // squirtle
        // wartortle
        // blastoise
      }
    ]
 *
 * EXAMPLE:
 *  filterByType(pokemon, "psychic")
 *  //> []
 */
function filterByType(pokemon, genre) {
  let match = []
  match = pokemon.filter((poke) =>{return poke.types.find((pokeType) => pokeType.type.name.toLowerCase() === genre.toLowerCase())
  })
  return match
}

/**
 * checkMinBaseExperience()
 * -----------------------------
 * Returns either true or false depending whether all pokemon have a minimum metascore. If the pokemon array is empty, throw an error with a message.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @param {number} baseExperience - A minimum metascore number. (e.g. 80)
 * @returns {Boolean|Error} A boolean
 *
 * NOTE: You must use the .every()` method.
 *
 * EXAMPLE:
 *  checkMinBaseExperience(pokemon, 90));
 *  //>  false
 */

function checkMinBaseExperience() {}



/**
 * findType()
 * -----------------------------
 * Returns an array of pokemon where the key is the name and the value is the FIRST type in the array of types. If the pokemon array is empty, throw an error
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @returns {Object|Error} An array of pokemon || Error
 *
 * NOTE: You must use the .map() & find() methods.
 *
 * EXAMPLE:
 *  findType(pokemon));
 *  //>  
 *  [
      { bulbasaur: 'grass' },
      { ivysaur: 'grass' },
      { venusaur: 'grass' },
      { charmander: 'fire' },
      { charmeleon: 'fire' },
      { charizard: 'fire' },
      { squirtle: 'water' },
      { wartortle: 'water' },
      { blastoise: 'water' },
      { caterpie: 'bug' },
      { metapod: 'bug' },
      { butterfree: 'bug' },
      { weedle: 'bug' },
      { kakuna: 'bug' },
      { beedrill: 'bug' },
      { pidgey: 'normal' },
      { pidgeotto: 'normal' },
      { pidgeot: 'normal' },
      { rattata: 'normal' },
      { raticate: 'normal' },
      { spearow: 'normal' },
      { fearow: 'normal' },
      ...
    ]
 */


const findType = (pokemon) => {
  if(!pokemon.length){
    throw "Error, No pokemon!"
  }
  return pokemon.map(el => {
    let val = undefined
    el.types.find((inner) => {
      val = inner.type.name
      return val
    })
    return {[el.name]: val}
  })
}

module.exports = {
  getAllPokemonNames,
  checkIfAnyPokemonWeighsLessThan,
  findByName,
  filterByType,
  checkMinBaseExperience,
  findType
};
