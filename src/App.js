import React from 'react';
import Home from "./Components/Home/Home";
import P404 from "./Components/P404";
//import Product from "./Components/ProductDetails/ProductDetails"
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import FAQ from "./Components/FAQ/FAQ";
import ResponsiveDrawer from "./Components/Home/ResposiveDrawerV2";


const theme = createTheme({
    typography: {
        fontFamily: ["Roboto", "sans-serif"].join(',')
    },
    palette:{
        primario: {
            main: "#f4f9f9",
            light: "#3d6575",
            dark: "#001621",
            contrastText: "#57585A"
        },
        secundario: {
            main: "#57585A",
            light: "#79e2ff",
            dark: "#0081b3",
            contrastText: "#f4f9f9"
        },
        text:{
            main:"#ced8db",
            greyColor: '#666666',
            blueColor: '#57585A'
        },
        background: {
            default: "#f4f9f9",
            opaque:'transparent linear-gradient(230deg, #1C7CBF 0%, #1C7CBF 4%, #9F58E2 49%, #6D4061 100%) 0% 0% no-repeat padding-box',
            hoverBotton: '#56a3bf',
            tableBody: "#f2f2f2"
        }
    }
});



function App() {
    return (

            <React.StrictMode>
                <ThemeProvider theme={theme}>
                   < Home />
                </ThemeProvider>
            </React.StrictMode>
    );
}

export default App;
