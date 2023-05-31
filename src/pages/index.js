import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #1a1a1a;
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`;

const AnimatedText = styled.span`
  animation: neon 1.5s ease-in-out infinite alternate;
  text-shadow: 0 0 1rem #fff, 0 0 2rem #fff, 0 0 3rem #fff, 0 0 4rem #0ff, 0 0 7rem #0ff, 0 0 8rem #0ff, 0 0 10rem #0ff, 0 0 15rem #0ff;
  font-family: 'Roboto Mono', monospace;
`;

const IndexPage = () => {
  const [animatedText, setAnimatedText] = useState('Hello, World!');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimatedText((text) => {
        const lastChar = text[text.length - 1];
        const restOfText = text.substring(0, text.length -1);
        return lastChar + restOfText;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <AnimatedText>{animatedText}</AnimatedText>
    </Container>
  );
};

export default IndexPage;

