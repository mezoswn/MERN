/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data)
                setLoaded(true);
            })
            .catch(err => console.log("Error: ", err))
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then(res => {
                setProducts([...products, res.data]);
            })
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" intialPrice="" initialDescription="" />
            <br />
            <h1>All Products</h1>
            {loaded && <ProductList  products={ products } removeFromDom={ removeFromDom } />}
        </div>
    )
}