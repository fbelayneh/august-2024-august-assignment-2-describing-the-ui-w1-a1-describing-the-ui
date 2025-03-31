import React from "react";
import styled from "styled-components";

const StyledGreeting = styled.h2`
  text-align: center;
  color: #2a9d8f;
  margin-top: 20px;
`;

const Greeting = () => {
  const hours = new Date().getHours();
  let greetingMessage;

  if (hours < 12) {
    greetingMessage = "Good morning";
  } else if (hours < 18) {
    greetingMessage = "Good afternoon";
  } else {
    greetingMessage = "Good evening";
  }

  return <StyledGreeting>{greetingMessage}!</StyledGreeting>;
};

export default Greeting;
