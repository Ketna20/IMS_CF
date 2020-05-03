import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.navigationItems}>
       <NavigationItem link="/" active>Invoice Builder</NavigationItem>
       <NavigationItem link="/">Check Inventory</NavigationItem>
    </ul>
);

export default navigationItems;