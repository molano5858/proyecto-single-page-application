// vamos a crear una funcion para saber donde esta el usuario en que id esta

const getHash = () =>
  // si tuvieramos solo location.hash me daria #/1/ y queremos eliminar el hash por eso se usa slice
  location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
// en el split tendriamos ['','1',''] por eso accedemos a la posicion [1] para tomar el id
// con el or || '/' le estamos diciendo que si no encuentra ninguna ruta entonces devuelva /
export default getHash;
