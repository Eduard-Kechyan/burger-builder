import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import styles from './SideDrawer.module.scss';

const sideDrawer = (props) => {
    return (
        <Aux>
            <Backdrop
                show={props.open}
                clicked={props.toggled}/>
            <div className={[styles["side-drawer"], props.open ? styles.open : styles.close].join(' ')}>
                <Logo height='11%'/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;