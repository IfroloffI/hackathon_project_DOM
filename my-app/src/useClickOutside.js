import React, {useEffect} from "react";

export const useClickOutside = (ref, callback) => {
    const handleClick = (e) => {
        if( ref.current && !ref.current.contains(e.target)){
            callbackllback();
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () =>{
            document.removeEventListener("mousedown", handleClick);                
        };
    });
};