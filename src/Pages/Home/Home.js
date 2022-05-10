import React from 'react';
import Banner from './Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import Treatment from './Treatment/Treatment';



const Home = () => {
    return (
       <div>
            <Banner></Banner>
            <div className='px-12 lg:px-36'>
            <Info></Info>
            <Services></Services>
        <Treatment></Treatment>
        </div>
       </div>
    );
};

export default Home;