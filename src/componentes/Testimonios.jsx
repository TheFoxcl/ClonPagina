import React from "react";
import '../estilos/Testmonio.css';


export function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require(`../imagenes/${props.imagen}.jpg`)} alt ="Foto Sweet Thoot"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre} en {props.lugar}</p>
        <p className="deseo-testimonio">{props.deseo} </p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}

