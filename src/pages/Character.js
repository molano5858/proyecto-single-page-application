import getHash from "../utils/getHash"; // para saber en que hash se esta moviendo
import getData from "../utils/getData"; // para hacer el fetch d enuestro personaje

// creacion del bloque donde va cada personaje con su descripcion
const Character = async () => {
  const id = getHash(); // para obtener el id
  const character = await getData(id);
  console.log("holi");
  console.log(character);
  const view = `
    <div class='Characters-inner'>
        <article class='Characters-card'>
            <img src='${character.image}' alt='image of ${character.name}'>
            <h2>${character.name}</h2>
        </article>

        <article class='Characters-card'>
            <h3>Episodes:${character.episode.length}</h3>
            <h3>Status:${character.status}</h3>
            <h3>Species:${character.species}</h3>
            <h3>Gender:${character.gender}</h3>
            <h3>Origin:${character.origin.name}</h3>
            <h3>Last Location:${character.location.name}</h3>
        </article>
    
    </div>

    
    `;
  return view;
};

export default Character; // lo exportamos porque lo queremos usar en otras seccinones de nuestro proyecto
