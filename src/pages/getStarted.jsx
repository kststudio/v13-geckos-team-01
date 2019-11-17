import React from 'react';
import { Container } from 'react-bootstrap'
import MainNavbar from '../components/MainNavbar'
import Title from '../components/Title'
import Brand from '../components/Brand'
import Footer from '../components/Footer'

function GetStarted() {
  return (
      <Container fluid="true">
          <MainNavbar/>
          <Title/>
          <Brand />
          <Footer/>
      </Container>
  );
}

export default GetStarted;
