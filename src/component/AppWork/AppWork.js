import './AppWork.css'
import { Col, Container, Row } from 'react-bootstrap'

function AppWork (){
    return (
        <>
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
        </>
    )
}

export default AppWork