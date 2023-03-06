import React from 'react'
import { scrollToTop } from '../../functions/scrollToTop'
import { useNavigate } from "react-router-dom";

export const NavigateButton = ({route}) => {

    const navigate = useNavigate()


  return (
    <button 
        onClick={()=>{
            scrollToTop();
            navigate(`/${route}`);
        }} className="servicios_container_button"
        >
            Ver Más
        </button>
  )
}
