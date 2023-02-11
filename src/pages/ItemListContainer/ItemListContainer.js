import ItemList from "../../components/ItemList/ItemList";
import ItemCount from "../../components/ItemCount/ItemCount";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


const arreglo = [
  {name:"producto 1", id:"0001"},
  {name:"producto 2", id:"0002"},
  {name:"producto 3", id:"0003"},
  {name:"producto 4", id:"0004"},
  {name:"producto 5", id:"0005"},
  {name:"producto 6", id:"0006"},
  {name:"producto 7", id:"0007"},
  {name:"producto 8", id:"0008"},
  {name:"producto 9", id:"0009"},
];


const ItemListContainer = ( {greeting} ) => {
const [products, setProducts] = useState([]);
const [filterProducts, setFilterProducts] = useState([]);
const { category } = useParams();
//const [productoCreado, setProductoCreado] = useState ({});


  //const getProducts = new Promise ((resolve, reject) => {
  //setTimeout(() => {
  //    resolve(arreglo);
  //}, 2000);
  //});

  const getProducts = fetch("https://fakestoreapi.com/products", {
    method: "GET",
    headers: {
      "content-type": "json"
    }
  });


  useEffect(() => {
      getProducts
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setProducts(response);
      })
      .catch(error => console.log(error))
  }, []);

  


  useEffect (() => {
    if(category) {
      const removeCharacters = category?.includes("%20") ? category.replace("%20", "") : category;
      const filterProducts = products.filter((product) => product.category === removeCharacters);
      setFilterProducts(filterProducts)}; 
  }, [category]);



 
  return (
    <div>
        {greeting}
        <ItemList productos={category ? filterProducts : products} />
       <div className="listaProductos" key={products.id}>
       <img alt={products.title} src={products.image} width="200px"/>
       <h2 className="titulo">{products.title}</h2>
       <h3>{products.category}</h3>
       <p>{products.description}</p>
       <ItemCount />
  </div>
    </div>
  );
};

export default ItemListContainer;