import React from 'react';
import CarouselMenu from './Homepage/CarouselMenu';
import MenuFooter from './Homepage/MenuFooter';
import HomepageNavbar from './Homepage/HomepageNavbar';
import HomepageCardSection from './Homepage/HomepageCardSection';

const Container = () => {
    return (
        <>
            <div className="container-fluid">
                <HomepageNavbar/>
                <div className="row text-center">
                    <CarouselMenu/>
                </div>

                <div className='row text-center'>
                    <MenuFooter/>
                </div>

                <div className='row text-center card-deck mt-5'>
                    <HomepageCardSection/>
                </div>
            </div>
        </>
    )
}

export default Container;