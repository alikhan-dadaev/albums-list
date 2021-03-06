import React from 'react';
import {useDispatch} from "react-redux";
import {selectAlbum} from "../redux/actions";

function Album(props) {
    const dispatch = useDispatch();

    const handleSelectAlbum = () => {
        dispatch(selectAlbum(props.album.id))
    }
    return (
        <li className={props.selectedAlbumId ? 'selected': ''}  onClick={handleSelectAlbum}>

            <div className="title">
            {props.album.title}
            </div>
        </li>
    );
}

export default Album;