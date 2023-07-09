import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

import {
  SiHackthebox,
  SiTryhackme,
} from "react-icons/si";

import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              As a cybersecurity student, I'm fluent in classic languages like C, JavaScript, and Python. 💻
              <br />
              <br />
              My expertise lies in web app penetration testing 🔐, Active Directory security, and mobile app penetration testing 📱. I'm passionate about identifying vulnerabilities and providing effective solutions.
              <br />
              <br />
              I love developing tools and scripts using Python 🐍 and scripting languages like Bash, automating tasks and enhancing security assessments. ⚙️
              <br />
              <br />
              With my skills and dedication, I'm on a mission to protect organizations from evolving threats in the digital world. 🛡️
              <br />
              <br />
              I also make YouTube videos where I share my knowledge and insights. You can check out my channel [here](https://www.youtube.com/channel/hac1337) for informative content and cybersecurity tips.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>

            <li className="social-icons">
              <a
                href="https://app.hackthebox.com/profile/485893"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <SiHackthebox />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://tryhackme.com/p/Ayushsingh"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <SiTryhackme />
              </a>
            </li>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hac01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/hac10101"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayush-singh-b89642223/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
      
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
