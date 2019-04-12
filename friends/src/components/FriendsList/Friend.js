import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Friend ({ friend }) {
    let { name, age, email } = friend;
    return( 
        <Link to="/friend-list">
            <div className='friend-wrapper' >
                <h3>{name}</h3>
                <p>{age}</p>
                <p>{email}</p>
            </div>
        </Link>
    );
}

Friend.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
}
