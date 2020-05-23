import React, { Component } from "react";
import {LinkedinOutlined, MoreOutlined, GithubOutlined} from '@ant-design/icons';
import {Navbar } from "react-bootstrap";






class Footer extends Component{

    render() {
            return (

            <Navbar bg ="dark" fixed="bottom" style= {{marginTop:"200px"}}>

                <div>
                    <a href={"https://www.linkedin.com/in/jared-kong/"}>
                        <LinkedinOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon" />
                    </a>
                    <MoreOutlined style={{ fontSize: '50px', color: "white" }} className="contact_icon" />
                    <a href={"https://github.com/jaredKong"}>
                        <GithubOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon"/>
                    </a>
                </div>
                
                <div className="ml-auto" style={{ color: "white" , textAlign:"right"}}>
                    Copyright © Jared Kong
                </div>
                

            </Navbar>



        );
    }

   
};


export default Footer;