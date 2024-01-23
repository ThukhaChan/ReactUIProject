import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Feature from './Feature';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Pricing from './Pricing';
import Advantage from './Advantage';
import Feedback from './Feedback';
import About from './About';

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Home/>
      <Feature/>
      <Feature1/>
      <Feature2/>
      <Pricing/>
      <Advantage/>
      <Feedback/>
      <About/>
    </div>
  );
}
export default App;
