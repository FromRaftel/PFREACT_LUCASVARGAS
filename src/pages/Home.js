import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from '../media/IMG_1237.JPG';
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import CartContextProvider from "../components/CartContext/CartContext";

const Home = () => {
     return (
          <CartContextProvider>
               <BrowserRouter>
                    <NavBar logo={logo} alt='logo' />
                    <Routes>
                         <Route path="/" element={
                              <ItemListContainer />
                         } />
                         <Route path="/category/:idCategory" element={
                              <ItemListContainer />
                         } />
                         <Route path="/item/:idItem" element={
                              <ItemDetailContainer />
                         } />
                         <Route path="/cart" element={
                              <Cart />
                         } />
                    </Routes>
               </BrowserRouter>
          </CartContextProvider>
     )
};

export default Home;