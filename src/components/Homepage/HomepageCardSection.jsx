import React from 'react';
import '../../css/HomepageCardSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const HomepageCardSection = () => {
    return (
        <>
            <div class="row container-fluid">
                <div class="col-sm-6 col-md-3">
                    <div class="Card">
                        <div class="card-body">
                        <img src='/Images/home_product/product-item1.jpg' alt='img'/>
                        <h2 className='item-name'>Iphone 11</h2>
                        <span className='item-description'>M.R.P.: ₹44,999.00</span>
                        <div class="hide">
                            <button class="kart"><FontAwesomeIcon icon={faShoppingCart}/>Add to Cart</button>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-3">
                    <div class="Card">
                        <div class="card-body">
                        <img src='/Images/home_product/product-item2.jpg' alt='img'/>
                        <h2 className='item-name'>Iphone 11</h2>
                        <span className='item-description'>M.R.P.: ₹44,999.00</span>
                        <div class="hide">
                            <button class="kart"><FontAwesomeIcon icon={faShoppingCart}/>Add to Cart</button>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-3">
                    <div class="Card">
                        <div class="card-body">
                        <img src='/Images/home_product/product-item3.jpg' alt='img'/>
                        <h2 className='item-name'>Iphone 11</h2>
                        <span className='item-description'>M.R.P.: ₹44,999.00</span>
                        <div class="hide">
                            <button class="kart"><FontAwesomeIcon icon={faShoppingCart}/>Add to Cart</button>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-3">
                    <div class="Card">
                        <div class="card-body">
                        <img src='/Images/home_product/product-item4.jpg' alt='img'/>
                        <h2 className='item-name'>Iphone 11</h2>
                        <span className='item-description'>M.R.P.: ₹44,999.00</span>
                        <div class="hide">
                            <button class="kart"><FontAwesomeIcon icon={faShoppingCart}/>Add to Cart</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomepageCardSection;