// importamos la funcion getData que hicimos para traer de la API los personajes
import getData from "../utils/getData";

// vamos a crear una funcion que nos va a retornar la vista que necesitamos
const home = async () => {
  const characters = await getData();
  const view = `
    <div class="characters">
        ${characters.results
          .map((character) => {
            let ejemplo = `<article class="characters-item">
            <a href='#/${character.id}/'>
              <img src='${character.image}' alt='foto de ${character.name}'>
              <h2>${character.name}</h2>
            </a>
        </article>`;

            return ejemplo;
          })
          .join("")}

    </div>
    `;

  return view;
};

export default home; // lo exportamos porque lo queremos usar en otras seccinones de nuestro proyecto
