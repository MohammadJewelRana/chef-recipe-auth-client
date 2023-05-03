import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import first from '../assets/react.svg'

import logo from '../../public/logo.jpg'
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
const Caresoul = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50 object-fit-cover border rounded img-fluid"
                        src={first}
                        alt="First slide"
                    />
                    <Carousel.Caption className='align-items-center justify-content-center'>
                        <h3 className='text-primary fw-bold fs-3'>Traditional Bangladeshi food for Launch</h3>
                        <p className='text-primary fw-semibold fs-5'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={first}
                        alt="second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-primary fw-bold fs-3'>Traditional Bangladeshi food for Dinner</h3>
                        <p className='text-primary fw-semibold fs-5'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={first}
                        alt="third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-primary fw-bold fs-3'>Traditional Bangladeshi Sweet</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={first}
                        alt="fourth slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-primary fw-bold fs-3'>Traditional Bangladeshi Pitha</h3>
                        <p className='text-primary fw-semibold fs-5'>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Caresoul;