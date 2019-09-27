import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeProduct, addQuantityToProduct, subtractQuantityToProduct } from "../../redux/actions/cartActions"


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        }
    }
    handleRemove = (id) => {
        this.props.removeProduct(id);
    }
    handleAddedQuantity = (id) => {
        this.props.addQuantityToProduct(id);
    }
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantityToProduct(id);
    }

    render() {
        let addedProducts = this.props.products.length ?
            (
                this.props.products.map(product => {
                    return (

                        <li className="collection-item avatar" key={product.id} >
                            <div className="item-img">
                                <img src={product.img} alt={product.title} className="" />
                            </div>
                            <div className="item-desc">
                                <span className="title">{product.title}</span>
                                <p>{product.desc}</p>
                                <p><b>Price: {product.changedPriceOfProduct}$</b></p>
                                <p><b>Quantity: {product.quantity}$</b></p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons" onClick={() => { this.handleAddedQuantity(product._id) }}>arrow_drop_up</i></Link>
                                    <Link to="#"><i className="material-icons" onClick={() => { this.handleSubtractQuantity(product._id) }}>arrow_drop_down</i></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(product._id) }}>Remove</button>
                            </div>
                        </li>
                    )
                })
            ) :
            (
                <p>Nothing.</p>
            )
        return (
            <div>
                {
                    this.props.isLoggedIn ?
                        <div className="container" >
                            <div className="cart">
                                <h1 style={{ "marginTop": "185px" }}>You Have Ordered:</h1>
                                <ul className="collection">
                                    {addedProducts}
                                    <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                                </ul>
                                <button className="waves-effect waves-light btn">Checkout</button>

                            </div>
                        </div>
                        : <h1>Please Login to see your products</h1>}
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        products: state.addedProductsToCart,
        total: state.totalAmountOfCart,
        isLoggedIn: state.isLoggedIn,
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (id) => dispatch(removeProduct(id)),
        addQuantityToProduct: (id) => dispatch(addQuantityToProduct(id)),
        subtractQuantityToProduct: (id) => dispatch(subtractQuantityToProduct(id)),
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Cart);