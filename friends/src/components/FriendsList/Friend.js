import React from 'react';
import { Link } from 'react-router-dom';

export default function Friend (props) {
    return(
        <Link to={`/friend-list/:id`}>
            <div className='friend-wrapper'>
                <h3>{props.friend.name}</h3>
                <p>{props.friend.age}</p>
                <p>{props.friend.email}</p>
            </div>
        </Link>
    );
}