import React from 'react';
import Banner from './Banner';
import Info from './Info/Info';
import Services from './Services/Services';



const Home = () => {
    return (
       <div>
            <Banner></Banner>
            <div className='px-12 lg:px-36'>
            <Info></Info>
            <Services></Services>
        </div>
       </div>
    );
};

export default Home;