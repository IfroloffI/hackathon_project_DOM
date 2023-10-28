import satelite from '../src/img/satelite.png'
import planet from '../src/img/planet_orange.png'
import './Home_component.css'

function Home_component() {
    return (
      <div className="Home_component">  
        <div className="Home_component_header">
        
              <div className='planet spin_right'>
                  <img src = {planet}></img>
              </div>
              
              <div className="satelite spin_left spin_onSome">
                  <img src = {satelite}></img>
                  </div>



            
            
        </div>
      </div>
    );
  }
  export default Home_component;