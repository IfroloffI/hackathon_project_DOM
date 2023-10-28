import logo from './logo.svg';
import satelite from './img/satelite.jpg'
import planet from './img/planet.jpg'
import './App.css';
import './Home_component.css'

function Home_component() {
    return (
      <body className="Home_component">  
        <main className="Home_component_header">
          <img src={logo} className="App-logo planet" alt="logo" />


            <div>
            <div className="satelite">
                <img src = {satelite}></img>
            </div>
            <div>
                <img src = {planet}></img>
            </div>
            </div>
            
        </main>
      </body>
    );
  }
  export default Home_component;