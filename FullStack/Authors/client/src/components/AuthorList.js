import React from 'react';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const { removeFromDom } = props;

    return (
        <div>
            {props.authors.map((author, index) => {
                return <p key={ index }>
                                { author.name }
                            <Link to={ '/edit/' + author._id }>
                                <button>Edit</button>
                            </Link>
                            <DeleteButton
                                authorId={author._id}
                                successCallback={ () => removeFromDom(author._id)}
                            />
                        </p>
            })}

        </div>
    )
}