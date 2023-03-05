import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export const BackButton = () => {

    const navigate = useNavigate();

    return (
        <button className='backButton'>
            <div onClick={() => { 
                navigate('/');
             }}>
                <IoIosArrowBack className='icon' />
            </div>
        </button>
    )
}
