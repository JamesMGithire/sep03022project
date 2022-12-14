import About from './About';
import './App.css';
import Footer from './Footer';
import Info from './Info';
import Interests from './Interests';

function App() {
  return (
    <div className="App">
      <div className='width300 height80vh darker br15 text-a-c'>
        <Info className="width100pc"/>
        <About/>
        <Interests/>
        <Footer/>
      </div>
    </div>
  );
}
export default App;
