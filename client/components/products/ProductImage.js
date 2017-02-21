import React from 'react';
import styles from './Product.css';
   
export default (props) => {
    //const img = require(props.image_url);
    return (
        <div className={styles.prodImgPlaceHolder}>
            <img src={props.image_url}></img>
        </div>
    );
}