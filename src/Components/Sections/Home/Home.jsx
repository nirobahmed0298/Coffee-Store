import React from 'react';
import Banner from '../Banner';
import PopulerProducts from '../PopulerProducts';
import FollowUS from '../FollowUS';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    let coffees = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <PopulerProducts loadedCoffees={coffees}></PopulerProducts>
            <FollowUS></FollowUS>
        </div>
    );
};

export default Home;