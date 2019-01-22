import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.scss';

const logo = (props) => (
    <div className={styles.logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="Logo"/>
    </div>
);

export default logo;