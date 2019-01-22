import React from 'react';
import styles from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className={styles["navigation-items"]}>
        <NavigationItem link='/' exact>
            Burger Builder
        </NavigationItem>
        <NavigationItem link='/orders'>
            Orders
        </NavigationItem>
    </ul>
);

export default navigationItems;