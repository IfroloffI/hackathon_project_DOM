import './Change_component.css'
import React, {useState, useRef} from "react" 
import {useClickOutside} from "./useClickOutside"

function Change_component() {

    const[isOpen,setOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, ()=>{
        if (isOpen) setTimeout(() => setOpen(false), 50);
    });

    return (
      <div className="Change_component">
          
            <svg className ="menu_button" onClick={() => setOpen(!isOpen)} fill="#9dbbc3" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297" stroke="#9dbbc3" stroke-width="1.1880000000000002"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="12.474"> <g> <g> <g> <path d="M280.214,39.211H16.786C7.531,39.211,0,46.742,0,55.997v24.335c0,9.256,7.531,16.787,16.786,16.787h263.428 c9.255,0,16.786-7.531,16.786-16.787V55.997C297,46.742,289.469,39.211,280.214,39.211z"></path> <path d="M280.214,119.546H16.786C7.531,119.546,0,127.077,0,136.332v24.336c0,9.255,7.531,16.786,16.786,16.786h263.428 c9.255,0,16.786-7.531,16.786-16.786v-24.336C297,127.077,289.469,119.546,280.214,119.546z"></path> <path d="M280.214,199.881H16.786C7.531,199.881,0,207.411,0,216.668v24.335c0,9.255,7.531,16.786,16.786,16.786h263.428 c9.255,0,16.786-7.531,16.786-16.786v-24.335C297,207.411,289.469,199.881,280.214,199.881z"></path> </g> </g> </g> </g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M280.214,39.211H16.786C7.531,39.211,0,46.742,0,55.997v24.335c0,9.256,7.531,16.787,16.786,16.787h263.428 c9.255,0,16.786-7.531,16.786-16.787V55.997C297,46.742,289.469,39.211,280.214,39.211z"></path> <path d="M280.214,119.546H16.786C7.531,119.546,0,127.077,0,136.332v24.336c0,9.255,7.531,16.786,16.786,16.786h263.428 c9.255,0,16.786-7.531,16.786-16.786v-24.336C297,127.077,289.469,119.546,280.214,119.546z"></path> <path d="M280.214,199.881H16.786C7.531,199.881,0,207.411,0,216.668v24.335c0,9.255,7.531,16.786,16.786,16.786h263.428 c9.255,0,16.786-7.531,16.786-16.786v-24.335C297,207.411,289.469,199.881,280.214,199.881z"></path> </g> </g> </g> </g></svg>
            <nav className={`menu ${ isOpen?"active" : ""}`} ref={menuRef}>
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
          
      </div>
    );
  }

  export default Change_component;