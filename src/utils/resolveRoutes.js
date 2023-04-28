// este router servira para lo siguiente:
// ok ya tengo la ruta que obtuve con el archivo getHash.js quiero saber entonces a que template debo
// dirigir si al home o alguno otro lado o si no encuentra mandarlo al error 404

const resolveRoutes = (route) => {
  // vamos a ver si la ruta que resibimos es un / o un id
  // por la documentacion de la API sabemos que los persojanes no son mas de 1000
  // se va a mover por cada id del personaje y si no entra a alguno entonces se
  // devuelve la ruta que obtuvimos como por ejemplo about

  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";

    return validRoute;
  }

  return route;
};

export default resolveRoutes;
