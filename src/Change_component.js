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
          
          <svg className ="menu_button" onClick={() => setOpen(!isOpen)} width="64px" height="64px" viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#1f3189" stroke="#1f3189"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#000000" stroke-width="0.384"></g><g id="SVGRepo_iconCarrier"> <title>menu</title> <desc>Created with Sketch.</desc> <g id="icons" stroke-width="0.8640000000000001" fill="none" fill-rule="evenodd"> <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-2294.000000, -159.000000)" fill="#ffffff" fill-rule="nonzero"> <g id="1" transform="translate(1350.000000, 120.000000)"> <path d="M974,57 C975.104569,57 976,57.8954305 976,59 C976,60.1045695 975.104569,61 974,61 L946,61 C944.895431,61 944,60.1045695 944,59 C944,57.8954305 944.895431,57 946,57 L974,57 Z M974,48 C975.104569,48 976,48.8954305 976,50 C976,51.1045695 975.104569,52 974,52 L946,52 C944.895431,52 944,51.1045695 944,50 C944,48.8954305 944.895431,48 946,48 L974,48 Z M974,39 C975.104569,39 976,39.8954305 976,41 C976,42.1045695 975.104569,43 974,43 L946,43 C944.895431,43 944,42.1045695 944,41 C944,39.8954305 944.895431,39 946,39 L974,39 Z" id="menu"> </path> </g> </g> </g> </g></svg>
           
            <nav className={`menu ${ isOpen?"active" : ""}`} ref={menuRef}>
                      <p className="height">height</p>
              <div className = 'bottom_box'>
                  <div className = 'bottom_box_move1'>
                      <div className='bottom_box_Up'> <button className="Up"> <svg xmlns="http://www.w3.org/2000/svg"  height="px" width="px" version="1.1" id="_x32_" viewBox="0 0 512 512" >
          <style type="text/css">
          </style>
          <g>
            <polygon class="st0" points="132.928,277.919 173.562,318.553 255.992,236.123 338.438,318.553 379.072,277.919 255.992,154.839     "/>
            <path class="st0" d="M255.992,0C114.606,0.015,0.015,114.606,0,256.008C0.015,397.394,114.606,511.984,255.992,512   C397.394,511.984,511.985,397.394,512,256.008C511.985,114.606,397.394,0.015,255.992,0z M408.585,408.585   c-39.118,39.079-92.938,63.189-152.593,63.205c-59.647-0.016-113.467-24.126-152.577-63.205   c-39.087-39.111-63.197-92.93-63.205-152.577c0.008-59.655,24.118-113.483,63.205-152.593   c39.11-39.087,92.93-63.197,152.577-63.205c59.655,0.008,113.476,24.118,152.593,63.205c39.079,39.11,63.197,92.938,63.205,152.593   C471.782,315.655,447.672,369.474,408.585,408.585z"/>
          </g>
          </svg></button> </div>
                      <div className='bottom_box_Down'> <button className="Down"><svg xmlns="http://www.w3.org/2000/svg"  height="px" width="px" version="1.1" id="_x32_" viewBox="0 0 512 512" >
          <style type="text/css">
          </style>
          <g>
            <polygon class="st0" points="256.008,275.876 173.562,193.446 132.928,234.081 256.008,357.161 379.072,234.081 338.438,193.446     "/>
            <path class="st0" d="M256.008,0C114.606,0.007,0.015,114.605,0,255.992C0.015,397.394,114.606,511.984,256.008,512   C397.394,511.984,511.984,397.394,512,255.992C511.984,114.605,397.394,0.007,256.008,0z M408.585,408.585   c-39.11,39.087-92.93,63.197-152.577,63.205c-59.655-0.008-113.483-24.118-152.594-63.205   c-39.086-39.119-63.196-92.938-63.204-152.593c0.008-59.647,24.118-113.467,63.204-152.585   c39.111-39.079,92.939-63.19,152.594-63.197c59.647,0.007,113.467,24.118,152.577,63.197   c39.087,39.118,63.197,92.938,63.205,152.585C471.782,315.647,447.664,369.466,408.585,408.585z"/>
          </g>
          </svg></button> </div>
                  </div>  
                  <div className = 'bottom_box_move'>
                      <div className='bottom_box_Speed'> <button className="Speed"> <svg xmlns="http://www.w3.org/2000/svg" height="px" width="px" version="1.1" id="_x32_" viewBox="0 0 512 512" >
          <style type="text/css">
            
          </style>
          <g>
            <path class="st0" d="M256,0C114.838,0,0,114.838,0,256c0,141.162,114.838,256,256,256c141.162,0,256-114.838,256-256   C512,114.838,397.162,0,256,0z M256,466.052c-115.998,0-210.052-94.054-210.052-210.052S140.001,45.948,256,45.948   S466.052,140.002,466.052,256S371.998,466.052,256,466.052z"/>
            <path class="st0" d="M269.989,190.757c-0.755-0.441-1.716-0.47-2.5-0.021c-0.762,0.435-1.239,1.275-1.239,2.158v47.821   l-83.676-49.958c-0.756-0.441-1.717-0.47-2.5-0.021c-0.748,0.435-1.233,1.275-1.233,2.158v63.113v63.085   c0,0.912,0.484,1.738,1.233,2.158c0.783,0.463,1.744,0.435,2.5-0.006l83.676-49.958v47.806c0,0.912,0.477,1.738,1.239,2.158   c0.784,0.463,1.745,0.435,2.5-0.006l105.72-63.12c0.762-0.442,1.211-1.24,1.211-2.116s-0.448-1.702-1.211-2.13L269.989,190.757z"/>
          </g>
          </svg></button> </div> 
                      <div className='bottom_box_Slow'><button className="Slow"> <svg xmlns="http://www.w3.org/2000/svg"  fill="#000000" height="px" width="px" version="1.1" id="Capa_1" viewBox="0 0 30.05 30.05">
          <g>
            <path d="M20.814,11c-0.193-0.102-0.43-0.086-0.604,0.041l-2.383,1.73v-1.258c0-0.217-0.121-0.42-0.32-0.514   c-0.191-0.102-0.424-0.086-0.602,0.041l-4.834,3.512c-0.15,0.109-0.242,0.287-0.242,0.473c0,0.184,0.092,0.357,0.242,0.471   l4.834,3.508c0.102,0.076,0.221,0.111,0.342,0.111c0.088,0,0.18-0.018,0.26-0.066c0.199-0.1,0.32-0.295,0.32-0.516v-1.26   l2.383,1.73c0.098,0.076,0.221,0.111,0.34,0.111c0.094,0,0.182-0.018,0.264-0.066c0.197-0.1,0.318-0.295,0.318-0.516v-7.02   C21.133,11.297,21.012,11.094,20.814,11z"/>
            <path d="M15.027,0C6.729,0,0,6.729,0,15.025C0,23.326,6.729,30.05,15.027,30.05S30.05,23.325,30.05,15.025   C30.051,6.729,23.326,0,15.027,0z M15.027,27.539c-6.912,0-12.518-5.604-12.518-12.514S8.115,2.51,15.027,2.51   c6.914,0,12.516,5.605,12.516,12.516S21.941,27.539,15.027,27.539z"/>
            <path d="M10.617,11.146H9.225c-0.168,0-0.305,0.137-0.305,0.305v7.146c0,0.168,0.137,0.309,0.305,0.309h1.393   c0.17,0,0.307-0.141,0.307-0.309v-7.146C10.924,11.283,10.787,11.146,10.617,11.146z"/>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
          </g>
          </svg> </button> </div>
                  </div>  
              </div>
              <p className="speed">speed</p>
                <div className = 'list_box'>
                  <ul className='menu_list'>
                    <li className='menu_item'>height:</li>
                    <li className='menu_item'>t°:</li>
                    <li className='menu_item'>time:</li>
                    <li className='menu_item'>speed:</li>
                    <li className='menu_item'>connection:</li>
                  </ul>
                  <ul className='menu_list_res'>
                    <li className='menu_item'>OUR</li>
                    <li className='menu_item'>OUR</li>
                    <li className='menu_item'>OUR</li>
                    <li className='menu_item'> OUR</li>
                    <li className='menu_item'>OUR</li>
                  </ul>
                </div>
            </nav>
          
      </div>
    );
  }

  export default Change_component;