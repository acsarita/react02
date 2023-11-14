import React, { useState } from "react";
import C01componente from "./componentes/C01componente";

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  return (
    <div>
      <h1>Instituto Honorio Delgado Espinoza</h1>
      <h2>Alex Junior Acsara Huayta</h2>
      <p>Noche</p>
    </div>
  );
}

export default App;
