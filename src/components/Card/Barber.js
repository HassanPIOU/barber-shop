import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
const Barber = (props) => {
    const item = props.item
    const detailBarber = props.detailBarber
    return(
        <div className="col-lg-12">
            <div className="herboil__product-item">
                <div className="product-img">
                    <a href="product-details.html"><img src="img/blank.png" alt="#" /></a>
                </div>
                <div className="product-info">
                    <h4 className="product-title"><a>{item.first_name} {item.last_name}</a></h4>
                    <p className="product-bmi">{item.owner ? "Shop Owner" : "Barber"}</p>
                    <div className="product-price">
                        <span>
                            <StarRatingComponent
                                name="about_rating"
                                value="4"
                                editing={false}
                            />
                        </span>
                    </div>
                </div>
                <div className="product-hover-action">
                    <ul>
                        <li><button className="add-to-cart-btn" onClick={e => detailBarber(item.id)}>Services</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Barber