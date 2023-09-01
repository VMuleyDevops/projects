
import './App.css';
// importing components
import Navbar from './components/navbar/navbar';
import Intro_section from './components/intro section/intro_section';
import Banner from './components/banner/banner';
import Card from './components/cards/card';
import Seeplaces from './components/seeplaces/seeplaces';
import Form from './components/form/form';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className=''>
     <Navbar/>
     <Intro_section/>
     <Banner/>
     <Card/>
     <Seeplaces/>
     <Form/>
     <Footer/>
    </div>
  );
}

export default App;
