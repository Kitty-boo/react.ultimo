import { Link } from "react-router-dom";



const ItemDetail = ({product}) => {
  return (
    <div  width="200" className="product" >
       <img alt={product.title} src={product.image} width="200px"/>
       <h2 className="titulo">{product.title}</h2>
       <h3>{product.category}</h3>
       <p>{product.description}</p>
    </div>
  );
};

export default ItemDetail;