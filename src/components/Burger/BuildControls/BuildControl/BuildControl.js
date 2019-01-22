import React from 'react';
import styles from './BuildControl.module.scss';

const buildControl = (props) => (
    <div className={styles["build-control"]}>
        <div className={styles.label}>{props.label}: {props.ingredients[props.type]}</div>
        <button className={styles.less} onClick={props.removed} disabled={props.disabled}>-</button>
        <button className={styles.more} onClick={props.added}>+</button>
    </div>
);

export default buildControl;