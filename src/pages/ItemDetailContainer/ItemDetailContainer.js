import "./style.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const {id} = useParams();
  console.log(id)
  const [singleProduct, setSingleProduct] = useState({});


  const getProduct = fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "GET",
  });

  useEffect(() => {
    getProduct
    .then((resp) =>{
      return resp.json();
    })
    .then((data) => {
      setSingleProduct(data);
    }
    ).catch((error) => {console.log(error)})
  }, []);


  return (
    <div>
      <Link to="/">
        Volver
      </Link> 
      <ItemDetail product={singleProduct}/>
    </div>
  )
}

export default ItemDetailContainer;