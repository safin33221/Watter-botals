
import PropTypes from "prop-types";

import "./Cart.css"
const Cart = ({cart,handleRemoveCart}) => {
    return (
        <div>
            <p>cart:{cart.length}</p>
            <div className="cart-container">
                {
                    cart.map(bottol => <img  key={bottol.id} src={bottol.img}></img>)
                }
            </div>
        </div>
    );
};

Cart.propTypes ={
    cart:PropTypes.array.isRequired,
    handleRemoveCart:PropTypes.func.isRequired
}

export default Cart;