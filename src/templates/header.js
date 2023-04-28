// creacion del template de header que se va a repetir en varias partes

const Header = () => {
  console.log("hola bebe header");
  const view = `
    <div class='header-main'>
        <div class='header-logo'>
            <h1>
                <a href='#'>
                SPA project
                </a>

            </h1>
        </div>
        <div class='header-nav'>
            <a href='#/about/ '>
            About
            </a>
        </div>

    </div>
    
    
    `;
  return view;
};

export default Header; // lo exportamos porque lo queremos usar en otras seccinones de nuestro proyecto
