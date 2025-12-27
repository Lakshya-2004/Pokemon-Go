import { useEffect, useState } from "react";
import { Pokemoncard } from "./pokemoncards";
import "./Pokemon.css"
export const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchip, setSearchip] = useState("");
    const [location,setLocation]=useState([]);
    const API = "https://pokeapi.co/api/v2/pokemon?limit=150 ";
    const FetchApi = async () => {
        try {
            const res = await fetch(API);
            const datafetched = await res.json();
            console.log(datafetched);

            const detaliedFetched = datafetched.results.map(async (cur) => {
                const res = await fetch(cur.url);
                const extdata = await res.json();
                return extdata;
            });
            const Alldatares = await Promise.all(detaliedFetched);// it is used to get the all data 
            // ,if single data get corrupt it will not run and await until all data are get fetched 
            console.log(Alldatares);
            setPokemon(Alldatares);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            setError(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        FetchApi();
       
    }, []);
    if (loading) {
        return <h1>Loading...</h1>;
    };
    if (error) {
        return <h1>{error.message}</h1>
    }

    const searchctx=pokemon.filter((curtxt)=>curtxt.name.toLowerCase().includes(searchip.toLowerCase()));
    return (
        <>
            <h1>Pokemon Component</h1>

            <div className="search-box">
                <input
                    type="text"
                    value={searchip}
                    onChange={(e) => setSearchip(e.target.value)}
                    placeholder="Search Pokémon..."
                />
            </div>
            <ul>
                {searchctx.map((cur) => {
                    return (<Pokemoncard key={cur.id} cur={cur} />);
                }

                )}
            </ul>
        </>

    );
}