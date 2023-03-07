import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from '../../functions/scrollToTop';

export const BackButton = () => {

    const navigate = useNavigate();

    return (
        <button className='backButton'>
            <div onClick={() => { 
                scrollToTop();
                navigate('/');
             }}>
                <IoIosArrowBack className='icon' />
            </div>
        </button>
    )
}
