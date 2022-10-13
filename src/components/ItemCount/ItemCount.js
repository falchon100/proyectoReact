import React from "react";
import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [items, setitems] = useState(initial);
  const quitar = () => {
    items > 0 ? setitems(items - 1) : alert("no tengo items");
  };
  const agregar = () => {
    items < stock ? setitems(items + 1) : alert("ya tiene el maximo de items");
  };

  const handleOnAdd = () => {
    if (items <= stock) onAdd(items);
  };
  return (
    <div className="pb-3">
      <div className="ItemCount ">
        <button onClick={quitar} className="ItemCount_Button">
          -
        </button>
        <p className="ItemCount_p">{items}</p>
        <button onClick={agregar} className="ItemCount_Button">
          +
        </button>
      </div>
      <button className="btn btn-violet mt-3 mb-1" onClick={handleOnAdd}>
        {" "}
        Agregar a carrito
      </button>
      <div>
        <p className="ItemCount_p">Stock Disponible : {stock - items}</p>
      </div>
    </div>
  );
};

export { ItemCount };
