import 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container className="mx-auto">
      <div>
          <NavBar />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Footer />
      </div>
    </Container>
  );
};

export default App;

