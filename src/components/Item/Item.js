import "./Item.css";

const Item = ({producto}) => {
  return (

<li className="listaProductos" key={producto.id}>
  <img alt={producto.title} src={producto.image} width="200px"/>
  <h2 className="titulo">{producto.title}</h2>
  <h3>{producto.category}</h3>
  <p>{producto.description}</p>
  </li>
  )
}

export default Item;