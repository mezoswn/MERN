import React,{useState} from 'react'

//Done with Ahmed Raddad

const Pokemon = (props) => {

    const [pokemon, setPokemon] = useState([]);

    const getPokemon = (e) => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => response.json())
            .then(response => setPokemon(response.results))
            .catch (console.log("Error"))
    };

    return (
        <>
        <div>
            <button onClick ={getPokemon}>Fetch Pokemon</button>
            {pokemon.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
        </div>
        </>
    )
}

export default Pokemon
