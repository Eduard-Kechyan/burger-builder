import React, {Component} from 'react';
import propTypes from 'prop-types';
import styles from './BurgerIngredient.module.scss';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        if (this.props.type === 'bread-top') {
            ingredient = (
                <div className={styles["bread-top"]}>
                    <div className={styles["seeds-1"]}></div>
                    <div className={styles["seeds-2"]}></div>
                </div>
            );
        } else {
            ingredient = <div className={styles[this.props.type]}></div>;
        }

        return ingredient;
    };
}

BurgerIngredient.propTypes = {
    type: propTypes.string.isRequired
};

export default BurgerIngredient;