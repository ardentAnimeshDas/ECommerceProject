import React from 'react';
import CarouselMenu from './Homepage/CarouselMenu';
import MenuFooter from './Homepage/MenuFooter';
import HomepageNavbar from './Homepage/HomepageNavbar';
import HomepageCardSection from './Homepage/HomepageCardSection';
import CardWatches from './Homepage/CardWatches';
import DiscountSale from './Homepage/DiscountSale';
import LatestGadgets from './Homepage/LatestGadgets';
import CarouselFooter from './Homepage/CarouselFooter';

const Container = () => {
    return (
        <>
            <div className="container-fluid">
                <HomepageNavbar/>
                <div className="row text-center mt-5">
                    <CarouselMenu/>
                </div>

                <div className='row text-center m-5'>
                    <MenuFooter/>
                </div>

                <div className='row text-center card-deck m-5'>
                    <HomepageCardSection/>
                </div>

                <div className='row text-center card-deck m-5'>
                    <CardWatches/>
                </div>

                <div className='row text-center card-deck mt-5'>
                    <DiscountSale/>
                </div>

                <div className='row text-center card-deck m-5'>
                    <LatestGadgets/>
                </div>
                <CarouselFooter/>
            </div>
        </>
    )
}

export default Container;