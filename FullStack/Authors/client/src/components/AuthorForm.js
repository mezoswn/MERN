import React, { useState } from 'react';
import { Link } from '@reach/router';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const { initialName, onSubmitProp } = props;
    const [ name, setName ] = useState(initialName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name});
    }

    return (
        <form onSubmit={ onSubmitHandler }>
            <p>
                <label>Author Name</label><br />
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={ name } name="name" />
            </p>
            <p>
                <Link to={'/'}>
                    <button>Cancel</button>
                </Link>
                <input type="submit" />
            </p>
        </form>
    )
}