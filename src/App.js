import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import Greeting from "./components/Greeting";
import styled from "styled-components";

const App = () => {
  return (
    <Router>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Nav>
      <Greeting />
      <Content>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>
      </Content>
    </Router>
  );
};

export default App;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 15px;
  background: #264653;
  a {
    color: white;
    text-decoration: none;
    font-size: 1.2em;
    &:hover {
      color: #e9c46a;
    }
  }
`;

const Content = styled.div`
  padding: 20px;
  text-align: center;
`;
