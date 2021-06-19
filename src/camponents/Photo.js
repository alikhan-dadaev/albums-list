import React from 'react';

function Photo(props) {
    return (
        <li>
            {props.photo.title}
        </li>
    );
}

export default Photo;