import React from 'react';
import styles from './CheckoutSummary.module.scss';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div className={styles["checkout-summary"]}>
            <h1>We hope it tastes well!</h1>
            <div className={styles.burger}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="danger" clicked={props.cancelled}>CANCEL</Button>
            <Button btnType="success" clicked={props.continued}>CONTINUE</Button>
        </div>
    );
};

export default checkoutSummary;