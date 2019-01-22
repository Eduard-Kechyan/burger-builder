import React from 'react';
import button from "../../../UI/Button/Button";
import styles from './SideDrawerButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const sideDrawerButton = (props) => {
    return (
        <button className={styles["side-drawer-button"]} onClick={props.clicked}>
            <FontAwesomeIcon icon='bars' size='2x'/>
        </button>
    );
};

export default sideDrawerButton;