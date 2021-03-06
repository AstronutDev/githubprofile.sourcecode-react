import { Col, Container, Row } from 'react-bootstrap'
import React, {useEffect}  from 'react'
import './AppAbout.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function AppAbout() {
    useEffect( () => {
        Aos.init({duration: 2000})
    }, [])

    return(
        <div data-aos="fade-left">
            <div className='appAbout-container'>
            <h1 className="h1-aboutme">&nbsp;About me 🙋🏻‍♂️</h1>
            <Container >
                <Row>
                    <Col>
                      
                            <h2 className="h2-text">&nbsp; Graduate</h2>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Bachelor Degrees at Prince of Songkla, Phuekt campus</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; GPA:3.23</p>

                            <h2 className="h2-text">&nbsp; Experience</h2>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Graduate - 2020/10 | Backend developer</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; 2020/11/16 - now | Backend developer @OpensourceTechnology</p>

                            <h2 className="h2-text">&nbsp; Activity</h2>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Workout: Weight trainning, Running</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Following new technology & new software</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Board game</p>

                            <h2 className="h2-text">&nbsp; Interested in</h2>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Web developemnt</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Block chain & web3 technology</p>

                    </Col>

                    <Col>
                            <h2 className="h2-text">&nbsp; Language Skills</h2>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Typescript, Javascript</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; HTML, CSS</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Swift</p>

                            <h2 className="h2-text">&nbsp; Backend Skills</h2>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Microservice</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Typeorm</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Postgresql</p>

                            <h2 className="h2-text">&nbsp; Concepts</h2>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Client & sever concept</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; OOP concept</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Oauth2 concept</p>


                            <h2 className="h2-text">&nbsp; Tools & Framework</h2>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Nestjs, Reactjs</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Kong api-gateway, Nginx</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Kafka</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Jest</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; Sentry</p>
                            <p className="p-text"> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; </p>   
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}


export default  AppAbout