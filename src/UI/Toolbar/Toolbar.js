import React from 'react';
import classes from './Toolbar.css';

const toolbar = (props) => (
    <div className={classes.toolbar} >{props.children}</div>
)

export default toolbar;