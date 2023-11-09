import React, { useState } from "react";
import C01componente from "./componentes/C01componente";

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  return (
    <div>
      <h1>Hola Mundo.....</h1>
      <h2>Eleiny Pamela Herrera Laguna</h2>
      <p>Fecha actual: 8/11/23</p>
    </div>
  );
}

export default App;
