import logo from './logo.svg';
import './App.css';
import useAxios from './hooks/useAxios';
import React, { useState } from 'react';

function App() {
  const [pokemonInput, setPokemonInput] = useState("")

  const [setUrl, data, loading, setLoading, error] = useAxios()

  function handleOnSubmit(e){
    // prevent from refreshing the page
    e.preventDefault()

    // console.log(pokemonInput)
    setUrl(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`)
    setLoading(true)
  }

  return (
    <div className="App">
      <h1>This is now a Shiny Pokemon Search App!</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          onChange={(e) => setPokemonInput(e.target.value)}
        />
        <button 
          type="submit"
        >
          Submit
        </button>
      </form> 

      {!loading && data && 
        <div>
          <h1>My Shiny {data.name}</h1>
          <h2>PokedexNo: {data.id}</h2>
          <img src={data.sprites.other.home.front_shiny} alt={data.name}/>

        {/* This is for video */}
          {/* <video width="600" height="400" controls>
            <source src={videoUrl} type="video/mp4"/>
          </video> */}
        </div>
      }
     </div>
  );
}

export default App;
