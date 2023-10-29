
import Change_component from './Change_component'
import Home_component from './Home_component'
import Home_component2 from './Home_component2'
import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  return (
    <div className="App">
        <Home_component2/>
        <Change_component/>
    </div>
  );
}

export default App;
