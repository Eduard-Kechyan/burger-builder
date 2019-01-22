import React from 'react';
import styles from './Order.module.scss';

const order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({name: ingredientName, amount: props.ingredients[ingredientName]});
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span className={styles.ingredient} key={ig.name}>{ig.name} (<strong>{ig.amount}</strong>)</span>;
    });

    return (
        <div className={styles.order}>
            <p>Ingredients:</p>
            {ingredientOutput}
            <p>Price: <strong>${Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;