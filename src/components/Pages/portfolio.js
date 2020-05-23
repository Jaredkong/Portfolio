import React from 'react';
import { Col, Container, Row, Card, Image } from 'react-bootstrap';
import { Component } from 'react';
import {LinkedinOutlined, GithubOutlined} from '@ant-design/icons';

import './style.css'

class Portfolio extends Component {
  render(){
    return(
      <Container fluid="md">
        <Row>
          <Col style={{textAlign:"center"}}>
              <h1 style={{textAlign:"center"}} >Portfolio</h1>
              <hr></hr>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Work Day Scheduler</Card.Title>
                  <Image thumbnail src="../../assets/images/workdayscheduler.JPG" alt="calendar app"></Image>
                  <Card.Text>
                    A simple calendar app for scheduling your work day
                  </Card.Text>
                  <Card.Link href="https://jaredkong.github.io/Homework-5/">Link</Card.Link>
                  <Card.Link href="https://github.com/Jaredkong/Homework-5">Repo Link</Card.Link>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Employee Tracker</Card.Title>
                  <Image thumbnail src="../../assets/images/employeetracker.PNG" alt="Employee Tracker"></Image>
                  <Card.Text>
                  A command-line application that can keep track of employees
                  </Card.Text>
                  <Card.Link href="https://github.com/Jaredkong/Homework-12">Repo Link</Card.Link>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Workout Tracker</Card.Title>
                  <Image thumbnail src="../../assets/images/workouttracker.PNG" alt="Workout Tracker"></Image>
                  <Card.Text>
                    An app that is able to view create and track daily workouts. Utilizes MongoDB.
                 </Card.Text>
                  <Card.Link href="https://sheltered-badlands-73497.herokuapp.com/">Link</Card.Link>
                  <Card.Link href="https://github.com/Jaredkong/homework-17">Repo Link</Card.Link>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Donationally</Card.Title>
                  <Image thumbnail src="../../assets/images/donationally.JPG" alt="Donationally"></Image>
                  <Card.Text>
                    A website to help find charities.  Team effort.  Worked mostly on google maps portion, which includes utilization of google maps API, google geolocation API, and google places API.
                  </Card.Text>
                  <Card.Link href="https://ancient-mountain-46633.herokuapp.com/Map">Link</Card.Link>
                  <Card.Link href="https://github.com/Olsenben77/Donation-App---Project-3">Repo Link</Card.Link>
                </Card.Body>
              </Card>
          </Col>
        </Row>
        <Row>
          <Col style={{textAlign:"center", marginTop:"20px" , marginBottom:"100px"}}>
            <h1>View Resume</h1>
            <hr></hr>
            <iframe src="https://resume.creddle.io/embed/4mxkstue824"
            width="850" height="800" seamless></iframe>
            {/* <a href="../../assets/resume.pdf">
              <FilePdfOutlined style={{fontSize:"100px" , color: "black"}}/>
            </a> */}
            <hr></hr>
            
            <a href={"https://www.linkedin.com/in/jared-kong/"}>
                <LinkedinOutlined style={{ fontSize: '100px', color: "black" }}/>
            </a>
            <a href={"https://github.com/jaredKong"}>
                <GithubOutlined style={{ fontSize: '100px' , color: "black"}}/>
            </a>


          </Col>
        </Row>
      </Container>
    )
  }
}

export default Portfolio;