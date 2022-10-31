import React  from 'react';
import {Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom";

export const MainRoutes = () =>{
        return (
            <>
            <Routes >
                <Route path={ "/" } element={<Navigate to={"/bienvenida"}/>}></ Route >

            </Routes>
            </>
        );

}

export default MainRoutes;