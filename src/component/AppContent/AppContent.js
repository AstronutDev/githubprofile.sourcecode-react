import './AppContent.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Carousel } from 'react-bootstrap';
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect} from 'react';

function AppContent () {

    useEffect( () => {
        Aos.init({duration: 2000})
    }, [])

    return(
        <>
        <div data-aos="fade-left" className="AppContent-container">
            <h1 className="h1-text">&nbsp; My certificate 📜</h1>
      
                <Carousel variant="dark">
                    <Carousel.Item interval={5000}>
                        <img
                        className="d-block w-100"
                        src="/img/nestjs_cert.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Nestjs Certificate</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                        className="d-block w-100"
                        src="/img/react_cert.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Reactjs Certificate</h3>
  
                        </Carousel.Caption>
                    </Carousel.Item>
                 
                </Carousel>
       


        </div>
        </>
    )
}

export default AppContent