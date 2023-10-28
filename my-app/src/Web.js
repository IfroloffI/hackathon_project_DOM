import './Web.css'
import button from '../src/bottoms.png'
import React, {useState, useRef} from "react"; 
import {useClickOutside} from "./useClickOutside"
function Web() {
    const[isOpen,setOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, ()=>{
        if (isOpen) setTimeout(() => setOpen(false), 50);
    });
    return (
<header className="header">
    <button className="menu_bottom" onClick={() => setOpen(!open)}>
    <nav className={`menu ${ isOpen ? "active" : ""}`}>
        <div className = 'bottom_box'>
            <button>
            </button>
           </div>  
        <div className = 'list_box'>
        <ul className='menu_list'>
            <li className='menu_item'>height:</li>
            <li className='menu_item'>t°:</li>
            <li className='menu_item'>time:</li>
            <li className='menu_item'>speed:</li>
            <li className='menu_item'>connection:</li>
        </ul>
        </div>
    </nav>
    </button>
</header>
    );
  }
  
  export default Web;