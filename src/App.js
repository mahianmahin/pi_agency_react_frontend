import MessengerCustomerChat from 'react-messenger-customer-chat';
import "../src/App.css";
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import Bottom from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Team from './components/Team';
import Technologies from './components/Technologies';
import Tools from './components/Tools';

function App() {
  return (
    <>
      <Cursor />
      <MessengerCustomerChat pageId="111573024985274" appId="3955918857853286" themeColor="#134E4A" />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Tools />
      <Technologies />
      <Team />
      <Reviews />
      <Contact />
      <Bottom />
    </>
  );
}

export default App;
