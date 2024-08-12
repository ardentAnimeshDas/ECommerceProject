import React from 'react';
import CarouselMenu from './Homepage/CarouselMenu';
import MenuFooter from './Homepage/MenuFooter';
import HomepageNavbar from './Homepage/HomepageNavbar';

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
            </div>
        </>
    )
}

export default Container;