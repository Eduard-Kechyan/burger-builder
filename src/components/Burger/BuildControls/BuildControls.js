import React from 'react';
import styles from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={styles["build-controls"]}>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemove(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                ingredients={props.ingredients}
                type={ctrl.type}/>
        ))}
        <button
            className={styles["order-button"]}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW
        </button>
    </div>
);

export default buildControls;