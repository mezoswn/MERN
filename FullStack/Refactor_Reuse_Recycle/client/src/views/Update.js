/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

export default props => {
    const { id } = props;
    const [ product, setProduct ] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect (() => {
        axios.get('http://localhost:8000/api/products/'+id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/'+id, product)
            .then(res => navigate('/'+id));
    }

    return (
        <div>
            <h1>Update Product</h1>
            {loaded && (
                <>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                    />
                    <DeleteButton
                        productId={ product._id }
                        successCallback={ () => navigate("/")}
                    />
                </>
            )}
        </div>
    )
}