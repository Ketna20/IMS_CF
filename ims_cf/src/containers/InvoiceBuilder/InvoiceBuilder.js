import React from 'react';
import Aux from '../../hoc/Aux';
import AddProduct from '../../components/Invoice/AddProduct/AddProduct';
import AddProductFormContainer from '../FormContainers/AddProductFormContainer/AddProductFormContainer';

class InvoiceBuilder extends React.Component {
    render () {
        return (
            <Aux>
                {/* create new invoice */}
                <div>Invoice</div>
                {/*  to add each entry for the invoice */}
                <div>Add Product</div>
                <AddProductFormContainer />
            </Aux>
        );
    }
}

export default InvoiceBuilder;