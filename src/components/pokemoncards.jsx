import "./pokemoncard.css";
export const Pokemoncard = ({ cur }) => {
    return (<>
        <div className="pokemon-card">
  <figure>
    <img
      src={cur.sprites.other.dream_world.front_default}
      alt={cur.name}
    />
  </figure>

  <div className="pokemon-info">
    <span className="pokemon-name">{cur.name}</span>
    <span>Height: {cur.height}</span>
    <span>Weight: {cur.weight}</span>
    <span>Type: {cur.types.map(t => t.type.name).join(", ")}</span>
    <span>Abilities: {cur.abilities.map(a => a.ability.name).join(", ")}</span>
    <span>Location:</span>
  </div>
</div>
 

    </>



    )
}