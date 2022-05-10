import React from 'react';
import Banner from './Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import Treatment from './Treatment/Treatment';
import Testimonials from './Testimonials/Testimonials';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Footer from './Footer';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='px-12 lg:px-36'>
                <Info></Info>
                <Services></Services>
                <Treatment></Treatment>
            </div>
            
            <div className='grid gap-y-32'>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;