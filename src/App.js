import "./App.css";
import cleaning_products_banner from "./components/images/cleaning_supplies_nature_banner.jpeg";
import gen_1 from "./components/images/generic_1.jpg";
function App() {
  return (
    <div className="App">
      <div className="encabezado_section">
        <h1>Cleaning Products Inc.</h1>
        <h2>
          Contáctanos por nuestras redes sociales directamente desde aquí!
        </h2>
        <img
          src={cleaning_products_banner}
          alt="productos_genericos_img "
          className="productos_genericos_banner"
        ></img>
      </div>

      <div className="about_us_section"></div>

      <div className="productos_servicios_section">
        <div className="productos_servicios_container">
          <h1>Productos y Servicios</h1>
          <img
            src={gen_1}
            alt="slider"
            className="productos_genericos_slider"
          ></img>
          <p className="productos_descripcion">
            Contamos con una variedad de productos <br /> y servicios ... Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
            nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
            pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla
            aliquet porttitor venenatis. Donec a dui et dui fringilla
            consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus
            dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis
            sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis
            semper risus. In adipiscing ultrices tellus, in suscipit massa
            vehicula eu.
          </p>
        </div>
      </div>

      <footer className="pie_de_pagina_section"></footer>
    </div>
  );
}

export default App;
