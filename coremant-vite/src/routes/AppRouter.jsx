

import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import { Footer } from '../components/footer/Footer';
import { FerreteriaPage } from '../pages/ferreteria/FerreteriaPage';
import { GastronomiaPage } from '../pages/gastronomia/GastronomiaPage';
import { IndexPage } from '../pages/IndexPage';
import { MtrOficinaPage } from '../pages/mtrOficina/MtrOficinaPage';

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path='/*' element={<IndexPage />} />

                <Route path='/ferreteria' element={<FerreteriaPage />} />
                <Route path='/mtroficina' element={<MtrOficinaPage />} />
                <Route path='/gastronomia' element={<GastronomiaPage />} />

            </Routes>

            <Footer/>
            
        </BrowserRouter>
    )
}
