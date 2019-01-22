import React from 'react';
import styles from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawerButton from '../SideDrawer/SideDrawerButton/SideDrawerButton';

const toolbar = (props) => (
    <header className={styles.toolbar}>
        <SideDrawerButton clicked={props.toggled}/>
        <Logo height='80%'/>
        <nav className={styles["desktop-only"]}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;