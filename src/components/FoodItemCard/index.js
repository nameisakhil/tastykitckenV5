import {AiFillStar} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const FoodItemCard = props => {
  const {foodData} = props
  const {name, cost, imageUrl, rating} = foodData

  return (
    <CartContext.Consumer>
      {value => {
        const quantity = 1

        const {addCartItem} = value
        const onClickAddToCart = () => {
          addCartItem({...foodData, quantity})
        }

        return (
          <li className="food-item">
            <img src={imageUrl} alt="food-item" className="food-img" />
            <div className="food-item-content-container">
              <p className="food-name">{name}</p>
              <p className="cost">₹ {cost}.00</p>
              <p className="rating">
                <AiFillStar className="ai-star" /> {rating}
              </p>
              <button
                type="button"
                className="add-button"
                onClick={onClickAddToCart}
              >
                Add
              </button>
            </div>
          </li>
        )
      }}
    </CartContext.Consumer>
  )
}

export default FoodItemCard
