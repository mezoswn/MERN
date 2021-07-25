import React,{useState,getPokemon} from 'react'
import axios from 'axios';

//Done with Ahmed Raddad

const PokemonAxios = props => {

    const [pokemon, setPokemon] = useState([]);

   const getPokemon = (e) => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {setPokemon(response.data.results)
            console.log(response)})
            
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

export default PokemonAxios
