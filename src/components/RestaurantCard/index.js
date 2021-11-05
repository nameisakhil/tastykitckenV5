import {Link} from 'react-router-dom'

import {AiFillStar} from 'react-icons/ai'

import './index.css'

const RestaurantCard = props => {
  const {restaurantData} = props

  const {imageUrl, id, userRating, name, cuisine} = restaurantData

  const fetchedUserRating = {
    ratingText: userRating.rating_text,
    ratingColor: userRating.rating_color,
    totalReviews: userRating.total_reviews,
    rating: userRating.rating,
  }

  return (
    <Link to={`/restaurants-list/${id}`} className="link-item">
      <li className="restaurant-item">
        <div>
          <img src={imageUrl} alt="restaurant-pic" className="thumbnail" />
        </div>

        <div className="card-content-container">
          <h1 className="restaurant-name">{name}</h1>
          <p className="cuisine-name">{cuisine}</p>
          <div className="rating-review-count-container">
            <AiFillStar className="star" />
            <p className="rating">
              {fetchedUserRating.rating}{' '}
              <span className="total-reviews">
                ({fetchedUserRating.totalReviews})
              </span>
            </p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RestaurantCard
