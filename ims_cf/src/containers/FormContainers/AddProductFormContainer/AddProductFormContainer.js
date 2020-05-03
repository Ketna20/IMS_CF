import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../components/FormComponents/Input';
import Select from '../../../components/FormComponents/Select';
import { Form, Row, Col } from 'reactstrap';

class AddProductFormContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            product: {
                ordDate: "",
                recdDate: "",
                invoiceNo: "",
                vendorName: "",
                prodCategory: "",
                prodCode: "",
                prodShortDesc: "",
                prodLongDesc: "",
                unitPrice: "",
                unitType: "",
                unitPerPack: "",
                PackType:"",
                packPrice: "",
                QtyOrd: "",
                QtyType: "",
                totalPrice: ""
            },
            categoryOptions: [
                "Basket",
                "Balloon",
                "Chocolate",
                "Discount",
                "Easel Print",
                "Flowers",
                "Filler",
                "Greens",
                "Greeting Card",
                "Gift Figures",
                "Helium",
                "Office Supplies",
                "Plants",
                "Plush",
                "Pots",
                "Ribbon",
                "Repair Maintenance",
                "Spray Paint",
                "Store Supplies",
                "Tax",
                "Vase",
                "Wallet Card"
            ],

            unitTypeOptions: [
                "Bunch",
                "Stem",
                "Each",
                "Discount",
                "Tax"
            ],

            packOptions: [
                "Case",
                "Bunch",
                "Each",
                "Discount",
                "Tax"
            ],
            qtyTypeOptions: [
                "Bunch",
                "Stem",
                "Case",
                "Each",
                "Discount",
                "Tax"
            ]
        }
    }

    render() {

        const today = new Date();
        
        return (
          <div>
            <Form className="container bg-info text-white">
                    <Row>
                        <Col>
                            <Input 
                                inputType={"date"}
                                title={"Ordered Date"}
                                name={"ordDate"}
                                value={this.state.product.ordDate}
                                placeholder={""}
                                // handleChange={this.handleInput}
                            />
                        </Col>
                        <Col>
                            <Input 
                                inputType={"date"}
                                title={"Received Date"}
                                name={"recdDate"}
                                value={this.state.product.recdDate}
                                placeholder={""}
                                // handleChange={this.handleInput}
                            />
                        </Col>
                        <Col>
                            <Input 
                                inputType={"text"}
                                title={"Invoice No"}
                                name={"invoiceNo"}
                                value={this.state.product.invoiceNo}
                                placeholder={""}
                                // handleChange={this.handleInput}
                            />
                        </Col>
                        <Col>
                            <Input 
                                inputType={"text"}
                                title={"Vendor Name"}
                                name={"vendorName"}
                                value={this.state.product.vendorName}
                                placeholder={""}
                                // handleChange={this.handleInput}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Select 
                                title={"Product Category"}
                                name={"prodCategory"}
                                options={this.state.categoryOptions}
                                value={this.state.product.prodCategory}
                                placeholder={"Select Catogory"}
                                // handleChange={this.handleInput}
                            />
                        </Col>
                        <Col>
                            <Input 
                                inputType={"text"}
                                title={"Product Code"}
                                name={"prodCode"}
                                value={this.state.product.prodCode}
                                placeholder={""}
                                // handleChange={this.handleInput}
                            />
                        </Col>
                        <Col>
                            <Input 
                                inputType={"text"}
                                title={"Product Short Desc"}
                                name={"prodShortDesc"}
                                value={this.state.product.prodShortDesc}
                                placeholder={""}
                                // handleChange={this.handleInput}
                            />
                        </Col>
                        <Col>
                            <Input 
                                inputType={"text"}
                                title={"Product Long Desc"}
                                name={"prodLongDesc"}
                                value={this.state.product.prodLongDesc}
                                placeholder={""}
                                // handleChange={this.handleInput}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input 
                                inputType={"number"}
                                title={"Unit Price"}
                                name={"unitPrice"}
                                value={this.state.product.unitPrice}
                                placeholder={""}
                                // handleChange={this.handleInput}
                            />
                    </Col>
                    <Col>
                        <Select 
                            title={"Unit Type"}
                            name={"unitType"}
                            options={this.state.unitTypeOptions}
                            value={this.state.product.unitType}
                            placeholder={"Select Unit Type"}
                            // handleChange={this.handleInput}
                        />
                    </Col>
                    <Col>
                        <Input 
                            inputType={"number"}
                            title={"Unit Per Pack"}
                            name={"unitPerPack"}
                            value={this.state.product.unitPerPack}
                            placeholder={""}
                            // handleChange={this.handleInput}
                        />
                    </Col>
                    <Col>
                        <Select 
                            title={"Pack Type"}
                            name={"packType"}
                            options={this.state.packOptions}
                            value={this.state.product.packType}
                            placeholder={"Select Pack Type"}
                            // handleChange={this.handleInput}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input 
                            inputType={"number"}
                            title={"Pack Price"}
                            name={"packPrice"}
                            value={this.state.product.packPrice}
                            placeholder={""}
                            // handleChange={this.handleInput}
                        />
                    </Col>
                    <Col>
                        <Input 
                            inputType={"number"}
                            title={"Quantity Ordered"}
                            name={"QtyOrd"}
                            value={this.state.product.QtyOrd}
                            placeholder={""}
                            // handleChange={this.handleInput}
                        />
                    </Col>
                    <Col>
                        <Select 
                            title={"Quantity Type"}
                            name={"QtyType"}
                            options={this.state.qtyTypeOptions}
                            value={this.state.product.QtyType}
                            placeholder={"Select Quantity Type"}
                            // handleChange={this.handleInput}
                        />
                    </Col>
                    <Col>
                        <Input 
                            inputType={"number"}
                            title={"Total Price"}
                            name={"totalPrice"}
                            value={this.state.product.totalPrice}
                            placeholder={""}
                            // handleChange={this.handleInput}
                        />
                    </Col>
                </Row>
            </Form>
          </div>
        );    
    }
}

// AddProductFormContainer.propTypes = {
//     ordDate: PropTypes.date,
//     recdDate: PropTypes.date,
//     invoiceNo: PropTypes.number,
//     vendorName: PropTypes.string.isRequired,
//     prodCategory: PropTypes.string.isRequired,
//     prodCode: PropTypes.string,
//     prodShortDesc: PropTypes.string.isRequired,
//     prodLongDesc: PropTypes.string.isRequired,
//     unitPrice: PropTypes.number.isRequired,
//     unitPerPack: PropTypes.string.isRequired,
//     packPrice: PropTypes.number.isRequired,
//     QtyOrd: PropTypes.number.isRequired,
//     totalPrice: PropTypes.number.isRequired
// };


export default AddProductFormContainer;