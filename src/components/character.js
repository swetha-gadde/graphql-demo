import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/queries";
import '../styles/my-styles.css'
function Characters(){
    const {loading, error, data} = useQuery(GET_CHARACTERS);
    if (loading) return <p>Loading Characters...</p>
    if (error) return <p>Error fetching characters</p>;
    return(
        <div>
            <h2> Character List</h2>
            <ul className="charactersGrid">
                {
                    data.characters.results.map((character) =>
                    (
                      <li className="character" key={character.id}>
                        <img className="characterImage" src = {character.image} alt = {character.name}></img>
                        <div>
                            <strong>{character.name}</strong>
                            <p>Status: {character.status}</p>
                            <p>Species: {character.species}</p>
                            <p>Gender : {character.gender}</p>
                        </div>
                      </li>  
                    ))
                }
            </ul>
        </div>
    )
};
export default Characters;