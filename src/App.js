import React from "react";
import CardContainer from "./CardContainer";
import motherboard from "./motherboard.jpg";
import cpu from "./cpu.jpg";
import ram from "./ram.jpg";
import hd from "./hd.jpg";
import psu from "./psu.jpg";
import gpu from "./gpu.png";
import cs from "./cs.jpg";
import sc from "./sc.jpg";
import alu from "./alu.jpg";
import regx from "./regx.jpg";
import udc from "./udc.jpg";
import cache from "./cache.jpg";

function App() {
  const cards1 = [
    {
      name: "Motherboard",
      description:
        "Parte principal de la computadora que tiene circuitos impresos.",
      functionality:
        "Conecta y comunica todos los componentes de la computadora.",
      imageUrl: motherboard,
    },
    {
      name: "Cooling System",
      description:
        "Es el sistema encargado de mantener la temperatura en niveles seguros de funcionamiento.",
      functionality: "Mantiene la temperatura en su estado optimo",
      imageUrl: cs,
    },
    {
      name: "Random Access Memory (RAM)",
      description: "Memoria temporal de la computadora.",
      functionality:
        "Proporciona acceso rápido a los datos y programas utilizados actualmente en la computadora.",
      imageUrl: ram,
    },
    {
      name: "Hard Drive",
      description: "Dispositivo de almacenamiento principal de la computadora.",
      functionality:
        "Almacena programas y datos a largo plazo en la computadora.",
      imageUrl: hd,
    },
  ];

  const cards2 = [
    {
      name: "Power Supply Unit (PSU)",
      description: "Es la unidad suplidora de energia.",
      functionality:
        "Proporciona energía eléctrica a todos los componentes de la computadora.",
      imageUrl: psu,
    },
    {
      name: "Graphics Processing Unit (GPU)",
      description:
        "Tarjeta procesadora y renderizaradora de gráficos en la computadora.",
      functionality: "Encargada del procesamiento visual",
      imageUrl: gpu,
    },

    {
      name: "Sound Card",
      description: "Tarjeta encargada de procesar el sonido y transmitirlo.",
      functionality:
        "Procesa y transmite el sonido a los altavoces o auriculares conectados a la computadora.",
      imageUrl: sc,
    },
    {
      name: "Central Processing Unit (CPU)",
      description: "Cerebro de la computadora. ",
      functionality: "Realiza cálculos y procesos complejos.",
      imageUrl: cpu,
    },
  ];

  const cards3 = [
    {
      name: "Arithmetic Logic Unit (ALU)",
      description: "Realiza operaciones aritméticas y lógicas en el procesador.",
      functionality: "Procesa los datos y realiza las operaciones necesarias en el procesador.",
      imageUrl: alu,
    },
    {
      name: "Registros",
      description: "Pequeñas unidades de almacenamiento de alta velocidad que almacenan datos temporales para el procesador.",
      functionality: "Almacenan datos temporales necesarios para el procesamiento de la información en el procesador.",
      imageUrl: regx,
    },
    {
      name: "Unidad de control",
      description: "Controla y coordina el flujo de datos entre el procesador y otros componentes de la computadora.",
      functionality: "Coordina el flujo de datos dentro del procesador y entre los diferentes componentes de la computadora.",
      imageUrl:udc,
    },
    {
      name: "Cache",
      description: "Memoria de acceso rápido que almacena datos utilizados frecuentemente por el procesador.",
      functionality: "Mejora la velocidad del procesador almacenando datos que son necesarios con frecuencia.",
      imageUrl: cache,
      
    },
  ];
  
  

  return (
    <div className="App">
      <div>
      <h1> Componentes Internos de la Computadora</h1>
      <div>
        <CardContainer cards={cards1} />
      </div>
      <div>
        <CardContainer cards={cards2} />
      </div>

      <div>
        <h1>Partes Internas del CPU</h1>
        <CardContainer cards={cards3} />
      </div>
    </div>
    </div>
  );
}

export default App;
