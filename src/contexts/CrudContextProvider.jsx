import React, { createContext, useContext, useReducer } from 'react';

import axios from 'axios'



export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action.payload }
    case 'GET_PRODUCT_DETAILS':
      return { ...state, productDetails: action.payload }
    default:
      return state
  }
}

const CrudContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, INIT_STATE)


  const getProducts = async () => {
    const { data } = await axios(`http://localhost:8000/products${window.location.search}`)
    dispatch({
      type: 'GET_PRODUCTS',
      payload: data
    })
  }

  const getProductDetails = async (id) => {
    const { data } = await axios(`http://localhost:8000/products/${id}`);
    dispatch({
      type: 'GET_PRODUCT_DETAILS',
      payload: data,
    });
  };





  const addProduct = async (newProduct) => {
    await axios.post('http://localhost:8000/products', newProduct)
    getProducts()
  }

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/products/${id}`)
    getProducts()
  }



  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`http://localhost:8000/products/${newProduct.id}`, newProduct);
    getProducts()
    console.log(465456);
  }


  return <productContext.Provider value={{
    products: state.products,
    productDetails: state.productDetails,
    addProduct,
    getProducts,
    deleteProduct,
    getProductDetails,
    saveEditedProduct,

  }}
  >{children}</productContext.Provider>
}

export default CrudContextProvider;