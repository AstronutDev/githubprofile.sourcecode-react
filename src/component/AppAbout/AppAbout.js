import { Col, Container, Row } from 'react-bootstrap'
import React, {useState}  from 'react'
import './AppAbout.css'


function AppAbout() {

    return(
        <>
            <div className='appAbout-container'>
            <Container >
                <Row>
                    <Col>
                            <h1 className="h1-aboutme">About me 🙋🏻‍♂️</h1>
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

                    </Col>

                    <Col>
                            <br/><br/>
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
        </>
    )
}


export default  AppAbout