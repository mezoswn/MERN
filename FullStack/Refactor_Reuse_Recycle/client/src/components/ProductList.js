/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

export default props => {
    const { removeFromDom } = props;

    return (
        <div>
            {props.products.map((product, index) => {
                return <p key={index}>
                            <Link to={"/" + product._id}>
                                { product.title }
                            </Link>
                            <DeleteButton 
                                productId={product._id} 
                                successCallback={ () => removeFromDom(product._id) }
                            />
                        </p>
            })}
        </div>
    )
}