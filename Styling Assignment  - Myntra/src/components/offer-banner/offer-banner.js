import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';
import offerImg from './offerImg.jpg';
import offerImg1 from './offerImg1.jpg';
import './offerBanner.css';

export default class OfferBanner extends Component{
    render(){
        return(
            <div className="offer-banner">
                <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={offerImg}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={offerImg1}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                      
                        </Carousel>
            </div>
        );
    }
}