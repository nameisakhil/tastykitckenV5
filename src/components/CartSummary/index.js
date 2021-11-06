import {Link} from 'react-router-dom'

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartData} = value

      let total = 0
      cartData.forEach(eachCartItem => {
        total += eachCartItem.cost * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartData.length} Items in cart</p>
            <Link to="/payment-success">
              <button type="button" className="checkout-button d-sm-none">
                Place Order
              </button>
            </Link>
          </div>
          <Link to="/payment-success" className="place-order-link">
            <button type="button" className="checkout-button">
              Place Order
            </button>
          </Link>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
