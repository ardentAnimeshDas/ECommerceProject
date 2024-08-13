import React from "react";
import '../../css/MenuFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShieldAlt, faTag, faCertificate } from '@fortawesome/free-solid-svg-icons';

const MenuFooter = () => {
    return (
        <>
            <div class="row container-fluid">
            <div class="col-sm-6 col-md-3">
                    <div class="Card0">
                        <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
                        <h5>Quality Guarantee</h5>
                    </div>
                </div>

                <div class="col-sm-6 col-md-3">
                    <div class="Card0">
                        <FontAwesomeIcon icon={faCertificate} size="2x"/>
                        <h5>Quality Certification</h5>
                    </div>
                </div>

                <div class="col-sm-6 col-md-3">
                    <div class="Card0">
                        <FontAwesomeIcon icon={faTag} size="2x"/>
                        <h5>Daily Offers</h5>
                    </div>
                </div>

                <div class="col-sm-6 col-md-3">
                    <div class="Card0">
                        <FontAwesomeIcon icon={faShieldAlt} size="2x"/>
                        <h5>Secure Payment</h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuFooter;