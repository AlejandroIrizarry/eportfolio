import React from "react";
import { useState } from "react";
import "./Project.css";
import poster from "/src/assets/poster.pdf";
import link_arrow from "/src/assets/link_arrow.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LottieAnimation from "../AnimationComponent/AnimationComponent";

import hero_avatar from "/src/assets/me.png";
import pyspace from "/src/assets/pyspace.png";

import Birthday from "../Birthday/Birthday.jsx";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Badge,
  Flex,
  Avatar,
  Text,
} from "@chakra-ui/react";

import { SettingsIcon, InfoIcon } from "@chakra-ui/icons";

import { Collapse, Button } from "@chakra-ui/react";

export default function Project() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <div className="projects">
      <h1>
        <SettingsIcon /> Projects <SettingsIcon />
      </h1>
      <Box align="center">
        <input
          className="range-slider"
          type="range"
          min="0"
          max="1"
          value={tabIndex}
          onChange={handleSliderChange}
          color="var(--yellow)"
          bg="var(--yellow)"
          colorScheme="var(--yellow)"
        />
        <Tabs
          id="projects"
          index={tabIndex}
          onChange={handleTabsChange}
          align="center"
          variant="enclosed"
        >
          <TabList>
            <Tab
              className="tab-name"
              _selected={{
                color: "var(--medium-gray) !important",
                bg: "var(--yellow)",
              }}
              _hover={{
                color: "var(--medium-gray) !important",
                bg: "var(--dark-gray)",
              }}
              color="#ffff"
            >
              Web Programming
            </Tab>
            <Tab
              className="tab-name"
              _selected={{
                color: "var(--medium-gray) !important",
                bg: "var(--yellow)",
              }}
              _hover={{
                color: "var(--medium-gray) !important",
                bg: "var(--dark-gray)",
              }}
              color="#ffff"
            >
              General Programming
            </Tab>
            <Tab
              className="tab-name"
              _selected={{ color: "black", bg: "var(--yellow)" }}
              _hover={{
                color: "var(--medium-gray) !important",
                bg: "var(--dark-gray)",
              }}
              color="#ffff"
              isDisabled
            >
              Database Programming
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <section className="project-section">
                <div className="project-media">
                  <iframe
                    src="https://codequest.academy"
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/FTLGroupG/codequest"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a href="https://www.codequest.academy/" target="_blank">
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a
                      id="codequest"
                      href="https://www.codequest.academy/"
                      target="_blank"
                    >
                      CodeQuest
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools:</b> (React.js, Node.js, Express.js, PostgreSQL,
                    Context API, JSON Web Token, Lottie Animation, Render,
                    Python Trinket)
                  </h4>
                  <p className="project-desc">
                    <b>CodeQuest</b> is a groundbreaking full-stack web
                    application designed to teach Python coding to children aged
                    6-10 in an exciting and interactive manner. 🚀 This
                    application was built for my Software Engineering
                    pre-internship at Salesforce.
                    <Collapse startingHeight={20} in={show}>
                      <br />
                      <h4>What is CodeQuest Academy?</h4>The platform transforms
                      learning into a thrilling adventure by incorporating
                      gamified elements, turning coding exercises into engaging
                      challenges. 🎮 With a user-friendly interface, kids unlock
                      the power of Python while developing problem-solving
                      skills through hands-on activities. 🌟 CodeQuest goes
                      beyond coding, nurturing creativity and encouraging
                      collaboration through mentorship and teamwork. 🌈 As young
                      learners progress, they earn badges and rewards, creating
                      a sense of accomplishment and celebrating their coding
                      journey. 👩‍💻 Join us at CodeQuest to empower your child
                      with the gift of coding and open the door to a world of
                      endless possibilities in a fun and inspiring way. 🏆{" "}
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                    <br />
                    <span className="contributor">
                      <Flex>
                        <Avatar src="https://images.squarespace-cdn.com/content/v1/616344cedcf8b409ba8ec99d/0999b510-194b-480e-a7ff-a6b4c32103ea/IMG_0593.jpg?format=2500w" />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Kennedy Parks
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              they/them
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                    <span className="contributor">
                      <Flex>
                        <Avatar src="https://media.licdn.com/dms/image/D4E03AQFJa4yWuAQ4cg/profile-displayphoto-shrink_400_400/0/1663283538763?e=1715817600&v=beta&t=dlxOq4T6gwbD4fcblE2azR5WinSVkxQ7E1mAsonM3wY" />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Favour Onukogu
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              she/her
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>
              <section className="project-section">
                <div className="project-media">
                  <iframe
                    src="https://lifetracker-ui-429a.onrender.com/"
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <button className="project-button">
                      Code<span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                    <a
                      href="https://www.loom.com/embed/31e9f68eb97e47568fc309787f2b779d?sid=8ecacf1b-0dcb-47b7-9115-fbeb698b57ce"
                      target="_blank"
                    >
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a
                      href="https://lifetracker-ui-429a.onrender.com/"
                      target="_blank"
                    >
                      LifeTracker
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools:</b> (React.js, Node.js, Express.js, PostgreSQL,
                    Render)
                  </h4>
                  <p className="project-desc">
                    <b>LifeTracker</b> includes a robust authentication system
                    using PostgreSQL and bcrypt, an Express API for user-related
                    activity storage, and multiple models implementing core
                    business logic for life tracking. I wrote SQL queries for
                    user statistics aggregation and summary overviews. The React
                    frontend communicates with the API using an API service
                    class, featuring pages and forms that interact with the
                    server through HTTP requests. The application state is
                    managed on the frontend using useEffect and useState hooks,
                    with user-authenticated JWT tokens stored in the browser's
                    local storage for persistent authentication.
                    <br />
                    <br />
                    <Collapse startingHeight={1} in={show}>
                      <h4>What is the LifeTracker App?</h4>Everywhere around us
                      is data waiting to be collected and utilized. In recent
                      years, we've seen the rise of applications and services
                      that exist to quantify concepts that were previously hard
                      to capture. FitBit, Apple Health, and Woop are all $1
                      billion dollar services to offer tracking statistics about
                      how we live our lives. The LifeTracker app will do exactly
                      that - track your life by quantifying your activity.
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>
              <section className="project-section">
                <div className="project-media">
                  <iframe
                    src="https://student-store-ui-cwt4.onrender.com/"
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/AlejandroIrizarry/site-week2-project2-student-store-starter/tree/main"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a
                      href="https://www.loom.com/share/3e23512a3ace460788ea7b198b0f5941"
                      target="_blank"
                    >
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a
                      href="https://student-store-ui-cwt4.onrender.com/"
                      target="_blank"
                    >
                      Store
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools: </b>(React.js, Node.js, Express.js, Heroku API,
                    Render)
                  </h4>
                  <p className="project-desc">
                    <b>CodePath Student Store</b> has implemented various
                    features for an enhanced shopping experience, allowing users
                    to expand the shopping cart in the left navigation,
                    increment and decrement product quantities with intuitive
                    '+' and '-' buttons, and automatically remove products when
                    their count reaches zero. The shopping cart provides a
                    detailed table with product information, quantities,
                    subtotal, tax, and total. Users can seamlessly checkout and
                    receive a confirmation receipt. Additionally, introduced a
                    dynamic onChange event in the checkout form to update name
                    and email fields while typing. Integrated a visually
                    engaging CSS animation with a floating logo for added user
                    interaction. Used the Heroku API to fetch products:{" "}
                    <a
                      href="https://codepath-store-api.herokuapp.com/store/"
                      target="_blank"
                    >
                      https://codepath-store-api.herokuapp.com/store/
                    </a>
                    <br />
                    <br />
                    <Collapse startingHeight={1} in={show}>
                      <h4>What is CodePath Student Store?</h4>Selling
                      merchandise in the modern era requires digital solutions.
                      For this project, I was tasked with designing and
                      constructing an online student store for the College of
                      CodePath. The web app consists of a frontend user
                      interface for potential customers to browse available
                      goods and a backend API to handle data management. The API
                      was built with Node and Express, and the UI was built with
                      React.
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>
              <section className="project-section">
                <div className="project-media">
                  <iframe
                    src="https://flixster.onrender.com/"
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/AlejandroIrizarry/site-week1-project1-flixster-starter"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a
                      href="https://www.loom.com/share/df3acad7a3bf452180692bfca19d7a35?sid=9ed6743a-a674-46b2-a22c-d50d6f570b15"
                      target="_blank"
                    >
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a href="https://flixster.onrender.com/" target="_blank">
                      Flixster
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools: </b>(HTML, CSS, JavaScript, JSON, TheMovieDB API,
                    Render)
                  </h4>
                  <p className="project-desc">
                    <b>Flixster </b>
                    offers users a seamless movie exploration experience by
                    leveraging The Movie Database API. The grid view, identified
                    by the movies-grid ID, displays current movies as a grid of
                    movie cards with the movie-card class. Each card includes
                    essential details such as the movie title (class:
                    movie-title), poster image (class: movie-poster), and votes
                    (class: movie-votes). Users can effortlessly load more
                    movies by clicking the load-more-movies-btn, dynamically
                    expanding the list without refreshing the page. The search
                    functionality is enhanced with a search input (id:
                    search-input), enabling users to query the API by entering
                    text and triggering a search request upon hitting 'Enter.'
                    The search results are presented in a grid view.
                    Additionally, the close-search-btn (id) allows users to exit
                    the search, clear results, and return to the display of
                    current movies. The website prioritizes basic HTML/CSS
                    accessibility features and ensures responsiveness for a
                    seamless user experience across devices.
                    <br />
                    <br />
                    <Collapse startingHeight={1} in={show}>
                      <h4>What is Flixster?</h4>
                      Flixster is a crafted dynamic website showcasing the
                      latest movies currently playing in theaters, seamlessly
                      integrating the Movie Database API to fetch an up-to-date
                      list of films. Utilizing HTML, CSS, and JavaScript, the
                      website provides an engaging and user-friendly interface
                      for users to explore and stay informed about the latest
                      cinematic releases. The Movie Database API was used to
                      fetch the movies:{" "}
                      <a
                        href="https://developer.themoviedb.org/docs/getting-started"
                        target="_blank"
                      >
                        https://developer.themoviedb.org/docs/getting-started
                      </a>
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>
              <section className="project-section">
                <div className="project-media">
                  <iframe
                    src="/projects/birthday"
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/AlejandroIrizarry/AlejandroIrizarry.github.io/tree/main/alejandroiri-site-ui/src/components/Birthday"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a href="/projects/birthday" target="_blank">
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a href="/projects/birthday" target="_blank">
                      Gift
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools: </b>(HTML, CSS, JavaScript, ChakraUI, Lottie
                    Animation, Render)
                  </h4>
                  <p className="project-desc">
                    <b>Gift </b>
                    is a special project I built for my partner as a birthday
                    gift card. Feel free to use this template if you like. You
                    will need to install lottie and import the Lottie Animations
                    to your project. Also, you must use ChakraUI for the
                    Timeline Component.
                    <br />
                    <br />
                    <Collapse startingHeight={1} in={show}>
                      <h4>What is Birthday Gift Card Site?</h4>A template site
                      that can be used as a digital birthday gift card for your
                      friends, family or that very special person.
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>
            </TabPanel>
            <TabPanel>
              <section className="project-section">
                <div className="project-media">
                  <iframe
                    src={poster}
                    frameborder="0"
                    width="100%"
                    height="400"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/jilliansabrina/MessageMate"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a
                      href="https://github.com/jilliansabrina/MessageMate"
                      target="_blank"
                    >
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a
                      href="https://drive.google.com/file/d/1lMXPm2VNCLKHGPTDdAX6q3OAXA62ngGo/view?usp=drive_link"
                      target="_blank"
                    >
                      MessageMate
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools:</b> (Python, Sockets Programming, Trinket, PyCharm
                    IDE)
                  </h4>
                  <p className="project-desc">
                    <b>MessageMate</b> is an instant messaging app crafted in
                    Python with a resilient client-server architecture. The
                    server utilizes Python's socket library to adeptly manage
                    concurrent connections, facilitating seamless and
                    instantaneous message exchanges. Tkinter is employed to
                    fashion an intuitive and visually appealing graphical user
                    interface (GUI) for users to interact with. Threading is
                    implemented for the simultaneous handling of multiple client
                    connections, ensuring responsiveness and uninterrupted
                    messaging. The system incorporates robust error-handling
                    mechanisms, enhancing its overall reliability. Additionally,
                    encryption measures can be optionally integrated to bolster
                    message transmission security. Following a client-server
                    model, MessageMate enables real-time connections, message
                    sending, and updates. Prioritizing user-friendly
                    interactions, reliability, and security, the app offers a
                    streamlined and efficient instant messaging experience.
                    <br />
                    <br />
                    <Collapse startingHeight={1} in={show}>
                      <h4>What is MessageMate?</h4>
                      In the contemporary era of pervasive digital connectivity,
                      this project focuses on developing a dynamic chat
                      application that combines network programming and
                      graphical user interface design. The aim is to create a
                      versatile platform that enables instant communication
                      while embodying the complexities of a robust client-server
                      architecture. Recognizing the pivotal role of effective
                      communication in today's fast-paced world, the project
                      aligns with societal trends, serving as a hands-on
                      exploration of network protocols and user interface design
                      intricacies. By addressing challenges such as concurrency,
                      data synchronization, and user-friendly interface design,
                      the project contributes to the broader discussion on how
                      technology can enhance and simplify human connections. The
                      subsequent sections of the scientific poster will detail
                      specific objectives, design principles, tools used, and
                      conclusions drawn from the successful implementation of
                      MessageMate, showcasing not only technical proficiency but
                      also a commitment to advancing communication technology.
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                    <span className="contributor">
                      <Flex>
                        <Avatar src="https://media.licdn.com/dms/image/D4E03AQFwspPLKyKWUQ/profile-displayphoto-shrink_100_100/0/1696024288558?e=1715817600&v=beta&t=Y7cq-FRlxcvOwmsFwh8375DAe_E1kd4F9NP39-2Sfqg" />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Jillian Alvarez
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              she/her
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Full-Stack Developer</Text>
                        </Box>
                      </Flex>
                    </span>
                    <span className="contributor">
                      <Flex>
                        <Avatar src="https://media.licdn.com/dms/image/D5603AQE0uSyDjG9UxA/profile-displayphoto-shrink_100_100/0/1694739138045?e=1715817600&v=beta&t=-lGYQRM_vkCHBBE9ZkK3wnhf43pfdkE4WMH_04wC-oA" />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Ricardo Hernandez
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">IT Specialist & Programmer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>
              <section className="project-section">
                <div className="project-media">
                  <img src={pyspace} />
                  <br />
                  <span className="project-button-container">
                    <a
                      href="https://github.com/AlejandroIrizarry/Space-Defender"
                      target="_blank"
                    >
                      <button className="project-button">
                        Code<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                    <a href="https://www.codequest.academy/" target="_blank">
                      <button className="project-button">
                        Demo<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </a>
                  </span>
                </div>
                <div className="project-info">
                  <h3 className="project-title">
                    <a
                      href="https://replit.com/@alejandroirizarry/Space-Defender"
                      target="_blank"
                    >
                      PySpace
                      <span className="link_arrow">
                        <LottieAnimation animationData={link_arrow} />
                      </span>
                    </a>
                  </h3>
                  <h4 className="project-skills">
                    <b>Tools:</b> (Python, PyGame, Replit IDE)
                  </h4>
                  <p className="project-desc">
                    <b>PySpace</b> is a PyGame developed during my participation
                    in Capital One's Tech Mini-Mester Software Engineering
                    Externship program.
                    <br />
                    <br />
                    <Collapse startingHeight={1} in={show}>
                      <h4>What is PySpace?</h4>A python game where your main
                      objective is to protect the space stations by shooting
                      arrows to enemy fleets. Will you be able to prove yourself
                      as the best space defender? Let's find out! <br />
                      <br />
                      <b>Instructions:</b> <br />
                      Defend the space stations from enemy fleets til the timer
                      reaches 00:00. Controls to move ship: W - Up S - Down A -
                      Left D - Right
                    </Collapse>
                    <Button
                      size="sm"
                      bg="var(--medium-gray)"
                      color="var(--yellow)"
                      _hover={{
                        color: "var(--medium-gray) !important",
                        bg: "var(--yellow)",
                      }}
                      onClick={handleToggle}
                      mt="1rem"
                    >
                      Show {show ? "Less" : "More"}
                    </Button>
                  </p>
                  <br />
                  <h4>Contributors</h4>
                  <span className="contributors">
                    <span className="contributor">
                      <Flex>
                        <Avatar src={hero_avatar} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            Alejandro Irizarry
                            <Badge
                              ml="1"
                              style={{
                                backgroundColor: "var(--yellow)",
                                color: "#fff",
                              }}
                            >
                              he/him
                            </Badge>
                          </Text>
                          <Text fontSize="sm">Software Engineer</Text>
                        </Box>
                      </Flex>
                    </span>
                  </span>
                </div>
              </section>
            </TabPanel>
            {/* Database Projects */}
            <TabPanel>
              <section className="project-section"></section>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Routes>
        <Route path="*/birthday" element={<Birthday />} />
      </Routes>
    </div>
  );
}
