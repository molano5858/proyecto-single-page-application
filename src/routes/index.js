// aqui vamos acrear el manejo de rutas para hacer el render de neustra app

import Header from "../templates/header";
import home from "../pages/home";
import Character from "../pages/Character";
import error404 from "../pages/error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

// creacion de rutas
const routes = {
  "/": home,
  "/:id": Character,
  "/contact": "Contact",
};

// creacion de nuestro manejador el cual se va a encargar de mostrar los elementos segun la logica que establezcamos
const router = async () => {
  const header = null || document.getElementById("Header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();

  // incorporar el hash
  let hash = getHash();
  console.log(hash);
  // creacion del manejador del aruta
  let route = await resolveRoutes(hash);
  // la variable render estoy validando que si lo que me devuelve route pertenece al array routes entonces dele
  // ese valor y si no pertenece entonces manda el error 404. ( recuerda que routes es un arreglo que esta arriba)

  let render = routes[route] ? routes[route] : error404;
  // ahora lo que nos devuelva el render tenemos que pasarlo a la variable content para que lo renderice
  // ya sea el personaje o ya sea el error
  content.innerHTML = await render();
};

export default router;
