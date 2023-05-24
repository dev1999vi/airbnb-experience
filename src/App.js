import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import {data} from './data';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Hero />
      <div className='card-container'>
        {data.map((element)=> <Card img ={element.coverImg} rating={element.stats.rating} reviewCount={element.stats.reviewCount} country={element.location} title= {element.title} price={element.price} openSpots={element.openSpots}/>)}
      </div>
    </div>
  );
}

export default App;
