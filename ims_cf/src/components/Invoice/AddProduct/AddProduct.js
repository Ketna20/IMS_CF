import React from 'react';
import classes from './AddProduct.module.css';
// this will have the add entry for product on the invoice.

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div className={classes.AddProduct}>
                {/* using controlled components */}
            </div>
        );
    }

}


export default AddProduct;