import React from 'react'

const Shop = (props) => {
    const item = props.item
    const detailshop = props.detailshop
    return(
      <>
      <div class="herboil__banner-item text-center herboil__banner-style-3">
      <div class="banner-img">
          <a href=""><img src="img/shop.jpg" alt="#" /></a>
      </div>
      <div class="banner-content">
          <div class="product-info">
              <h4 class="product-title"><a href="product-details.html">{item.name}</a></h4>
              <p class="product-bmi">{item.address}</p>
          </div>
          <div class="btn-wrapper">
              <button onClick={e => detailshop(item.id)} class="boxed-btn">OPEN</button>
          </div>
      </div>
      </div>

          </>
    )
}

export default Shop