import './AppWork.css'
import { Col, Container, Row } from 'react-bootstrap'
import React, {useEffect}  from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function AppWork (){

    useEffect( () => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div  data-aos="fade-left">
            <div className="AppWork-container">
                <h1 className="h1-topic">&nbsp; My Works 👨🏻‍💻</h1>
            </div>

            <Container>
                <Row>
                    <Col>
                        <div>
                            <img className="work-img" src="/img/leave.png"/>
                        </div>
                    </Col>
                    {/* <Col>
                        <div>
                            <img className="work-img" src="/img/leave.png"/>
                        </div>
                    </Col> */}
                </Row>
                
            </Container>
        </div>
    )
}

export default AppWork