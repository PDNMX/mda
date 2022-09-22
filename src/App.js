import React from 'react';
import Home from "./Components/Home/Home";
import P404 from "./Components/P404";
//import Product from "./Components/ProductDetails/ProductDetails"
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {
    Route,
    Routes,
    BrowserRouter,
} from "react-router-dom";
import {ProductDetails} from "./Components/ProductDetails/ProductDetails";

const theme = createTheme({
    typography: {
        fontFamily: ["Roboto", "sans-serif"].join(',')
    },
    palette:{
        primario: {
            main: "#0d3b49",
            light: "#3d6575",
            dark: "#001621",
            contrastText: "#ced8db"
        },
        secundario: {
            main: "#3ab0e5",
            light: "#79e2ff",
            dark: "#0081b3",
            contrastText: "#0d3b49"
        },
        text:{
            main:"#ced8db",
            greyColor: '#666666',
            blueColor: '#3ab0e5'
        },
        background: {
            default: "#0d3b49",
            opaque:'#155065',
            hoverBotton: '#56a3bf',
            tableBody: "#f2f2f2"
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" basename={process.env.PUBLIC_URL} element={<Home />}  />
                    <Route path="*" element={<P404 />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
