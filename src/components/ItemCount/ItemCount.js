import "./style.css";
import { useState } from "react";

const ItemCount = () => {
  const [contador, setContador] = useState(0);
  const minimoCompra = 1;
  const maximoCompra = 10;


  const sumar = () =>{
    if (maximoCompra === contador) {
      alert("has alcanzado el limite de compra, te notificaremos cuando se tengan mas unidades en existencia")
      return;
    }
    setContador(contador + 1)
  };


  const restar = () =>{
    if (minimoCompra === contador) {
      return;
    }
    setContador(contador - 1)
  };

  return (
    <div className="counter">
      <div className="controles">
        <button onClick={restar}>-</button>
        <div>
          <span>
            {contador}
          </span>
        </div>
        <button onClick={sumar}>+</button>
      </div>
      <div>
      <button>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount;