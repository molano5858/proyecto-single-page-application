console.log("Hola bebe que mas pues");

import router from "./routes/index";

// escuchamos cuando carga la pagina
window.addEventListener("load", router);
// escuchamos cuando el hash cambia
window.addEventListener("hashchange", router);
