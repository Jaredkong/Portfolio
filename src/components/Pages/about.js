import React, {Component} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Jared from "../../components/assets/images/jaredkong.jpg"
import "./style.css"


class About extends Component{
    render(){
        return(
            <Container className="main">
                <Row>
                    <Col>
                        <img src={Jared} alt="Jared Kong"/>
                    </Col>
                    <Col>
                        <h1>About Me</h1>
                        <hr></hr>
                        Hello! My name is Jared Kong.  I am a UW Bootcamp graduate, and soon to be UW Bothell graduate. My skills include HTML, CSS, SQL and Javascript.  Currently, I work at a sushi restaurant, where I make sushi behind the sushi bar.  My interests include cooking, coding, and solving puzzles.  I spend most of my free time inside playing games with friends. 
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default About;