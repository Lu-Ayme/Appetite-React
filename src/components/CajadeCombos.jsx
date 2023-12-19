import React from "react";
import '../assets/css/app.css'
import Combos from "./Combos";

import hamburguesaConPapas from '../assets/images/hamburguesa-con-papas.png'
import papasConCoca from '../assets/images/papas-con-coca.png'
import pizzaConCoca from '../assets/images/pizza-con-coca.jpg'
import polloConEnsalada from '../assets/images/pollo-con-ensalada.jpg'

let combos = [{
  imagen: (hamburguesaConPapas),
  titulo: 'Hamburguesa con papas',
  descripcion: 'La hamburguesa con papas es un clásico deleite gastronómico que combina una jugosa y sabrosa carne entre dos panes suaves, acompañada de crujientes papas fritas doradas. Esta deliciosa combinación ofrece una explosión de sabores y texturas, desde la carne jugosa hasta las papas crujientes, creando una experiencia culinaria satisfactoria y reconfortante para los amantes de la comida rápida.'
}, {
  imagen: (papasConCoca),
  titulo: 'Papas fritas con Coca-Cola',
  descripcion: 'Las papas fritas con Coca-Cola ofrecen la combinación perfecta de indulgencia y refrescancia. Las crujientes papas doradas, saladas y deliciosamente sabrosas se complementan con el efervescente y dulce sabor de una Coca-Cola helada. Este dúo clásico proporciona una experiencia gastronómica reconfortante que satisface los antojos con cada bocado y sorbo, creando un placer indulgente.'
}, {
  imagen: (pizzaConCoca),
  titulo: 'Pizza con Coca-Cola',
  descripcion: 'La pizza con Coca-Cola es un dúo irresistible de placer gastronómico. La combinación de una sabrosa pizza, con su perfecta fusión de queso derretido y toppings apetitosos, junto con el efervescente y refrescante sabor de una Coca-Cola helada, crea una experiencia culinaria que deleita los sentidos y satisface los antojos, haciendo de cada bocado una deliciosa celebración.'
}, {
  imagen: (polloConEnsalada),
  titulo: 'Pechuga de pollo con ensalada rusa',
  descripcion: 'La pechuga de pollo con ensalada rusa es un platillo que equilibra la suavidad de la pechuga de pollo a la parrilla con la frescura y cremosidad de la ensalada rusa. La jugosidad del pollo se combina armoniosamente con los trozos de papa, zanahoria y guisantes en la ensalada, creando una experiencia gastronómica satisfactoria y llena de sabores.'
}
]


function CajadeCombos() {
  return (
    <>
      <div className="row">
        {combos.map((combo, i) => {
          return < Combos {...combo} key={i} />
        })}
      </div>      
    </>
  )
}

export default CajadeCombos