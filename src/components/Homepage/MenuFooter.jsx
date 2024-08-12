import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShieldAlt, faTag, faCertificate } from '@fortawesome/free-solid-svg-icons';

const MenuFooter = () => {
    return (
        <>
                <div className="col-12 col-md-3 d-flex flex-column align-items-center mb-4 mb-md-0">
                    <div className="d-flex flex-row align-items-center">
                        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                        <div className="mt-2">
                            <h5>Quality Guarantee</h5>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 d-flex flex-column align-items-center mb-4 mb-md-0">
                    <div className="d-flex flex-row align-items-center">
                        <FontAwesomeIcon icon={faCertificate} size="2x" />
                        <div className="mt-2">
                            <h5>Quality Certification</h5>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 d-flex flex-column align-items-center mb-4 mb-md-0">
                    <div className="d-flex flex-row align-items-center">
                        <FontAwesomeIcon icon={faTag} size="2x" />
                        <div className="mt-2">
                            <h5>Daily Offers</h5>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 d-flex flex-column align-items-center">
                    <div className="d-flex flex-row align-items-center">
                        <FontAwesomeIcon icon={faShieldAlt} size="2x" />
                        <div className="mt-2">
                            <h5>Secure Payment</h5>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default MenuFooter;