import React from 'react';
import styles from './Order.module.scss';

const order = (props) => (
    <div className={styles.order}>
        <p>Ingredients: Salad (1)</p>
        <p>Price: <strong>${parseFloat(Math.round(props.price * 100) / 100).toFixed(2)}</strong></p>
    </div>
);

export default order;