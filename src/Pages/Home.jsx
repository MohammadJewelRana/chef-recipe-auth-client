import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import first from '../assets/react.svg'
import ChefDetails from './ChefDetails';
import Caresoul from './Caresoul';
import Banner from './Banner';
import Featured from './Featured';


const Home = () => {
    const chefData = useLoaderData();
    // console.log(chefData);

    return (
        <div>

            {/* caresoul start */}

            {/* <Caresoul></Caresoul> */}

            {/* caresoul end */}





            {/* Chef details start*/}
            <div>
                <h2 className='text-center text-success my-4 fs-1 fw-bold'>Chef Details</h2>
                <Row xs={1} md={2} lg={3} className="g-4 mx-5">
                    {
                        chefData.map(chef => <ChefDetails
                        chef={chef}
                        key={chef.id}
                        
                        ></ChefDetails>)
                    }
                </Row>
            </div>
            {/* chef details end */}



            {/* Make cooking fun and easy */}
            <Featured></Featured>
            {/* Make cooking fun and easy */}



            {/* banner start */}
            <Banner></Banner>

            {/* banner end */}


            {/* Contact us */}

            {/* Contact us */}







        </div>
    );
};

export default Home;