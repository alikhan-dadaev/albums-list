import React from 'react';

function Photo(props) {
    return (
        <li>
            <img src={props.photo.thumbnailUrl} />
        </li>
    );
}

export default Photo;