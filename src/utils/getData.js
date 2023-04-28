// este archivo es para traer los datos de la API

const API = "https://rickandmortyapi.com/api/character/";

const getData = async (id) => {
  //vamos a hacer una logica para saber si nos dan un id o no, vamos a decir que si id existe entonces traeme
  // el personaje contatenando el id a la url de la API, si no existe id entonces traer
  //https://rickandmortyapi.com/api/character/ para que traiga todos los personajes
  const apiURL = id ? `${API}+${id}` : API;

  // ahora vamos a hacer el llamado a estos elementos con try catch
  try {
    // response va a hacer el llamado a fetch
    const response = await fetch(apiURL);
    // ahora vamos a convertir la respuesta del servidor a un objeto JSON que sea iterable
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
};

export default getData;
