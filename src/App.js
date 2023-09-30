import React from "react";
import styled from "styled-components";
import HomeComponent from "./home";

const Container = styled.div`
  background-color: #304288 ;

  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px ;
  font-family: Montserrat;
  border : 2px solid black;
`;

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
  border : 5px solid black;
  border-radius = 50%;
`;
const App = () => {
  return (
    <Container>
      <Header style={{color:'red', margin:'20px', textShadow: '2px 2px yellow'}}>Expense Tracker</Header>
      <HomeComponent />
    </Container>
  );
};

export default App;