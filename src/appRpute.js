import React, { useEffect } from 'react';
//imports del react router
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
//imports de los componentes
import Home from './components/home/home';
import CarShopList from './components/carShop/carList';
import SeeProduct from './components/products/seeProduct';
import Main from './components/layouts/main';
import ListCategories from './components/categories/listCategories';
import AllCardsCategories from './components/categories/allCardCategories';
import SkeletoMultiple from './components/layouts/skeletonMultiple';import Skeleto from './components/layouts/skeleton';
import Login from './components/login/login';
//imports from API's
import getCategories from './services/category/getAllCategories';
import Register from './components/login/register';
import ShowProducts from './components/categories/showProductsForCategory';

export function AppRoute(){
  const[categories, setCategories] = React.useState([]);
  
  useEffect(() =>{
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    getCategories()
    .then( (newCat) => {
      setCategories(newCat);
    });
  };

    return(
      <Router>
        <Routes>
          <Route path="/store-practice" element={ <Main /> }>
            <Route index element={ <Home/> } />
            <Route exact path=":isLoggin/:userId/login" element={ <Login /> }/>
            <Route exact path="login/register" element={<Register/>} />
            <Route exact path=":isLoggin/:userId/product/see-product/:product_id" element={ <SeeProduct /> }/>
            <Route exact path=":isLoggin/:userId/carShop-List" element={ <CarShopList/> } />
            <Route exact path=":categories" element={
              <ListCategories>
                { (categories.length === 0) ? <SkeletoMultiple /> : <AllCardsCategories objects={categories}/> }
              </ListCategories> } 
            />
            <Route exact path="categories/products/:category_id" element={<ShowProducts/>} />
          </Route>
        </Routes>
      </Router>
    );
}