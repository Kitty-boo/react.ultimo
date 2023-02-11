import './App.css';
import NavBar from './components/NavBar/NavBar'
import Error from './components/Error/Error';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='*' element={<Error />}/>
    <Route path="/" element={<ItemListContainer />} /> 
     <Route path="/category/:category" element={<ItemListContainer />} /> 
    <Route path="item/:id" element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>


    //<div>
      //  <NavBar />
        //<ItemListContainer greeting="Hola mundo" />
    //</div>
  );
};

export default App;
