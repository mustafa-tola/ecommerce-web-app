import React, { Component } from 'react';
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

class Home extends Component {
    handleClick = (id) => {
        console.log(id);
        this.props.addToCart(id);
    }
    render() {
        var itemsList = this.props.products.map((product) => {
            return (
                <div className="card">
                    <div className="card-image">
                        <img src={product.img} alt={product.title} />
                        <h3 className="card-title" style={{ "color": "black" }}>{product.title}</h3>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={(product) => {console.log(product.id); this.handleClick(product.id)}}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{product.desc}</p>
                        <p><b>Price: {product.price}$</b></p>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {this.props.isLoggedIn ?
                    <div className="container">
                        <h1 className="center" style={{ "marginTop": "185px" }}>Products</h1>
                        {itemsList}
                    </div> : <h1>Please login to see our products</h1>}
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        products: state.products,
        isLoggedIn: state.isLoggedIn,
    }
}

const MapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {
        id,
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Home);