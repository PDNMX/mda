import React from 'react';
import Home from "./Components/Home/Home";
import {createTheme, ThemeProvider} from "@mui/material/styles";


const theme = createTheme({
    typography: {
        fontFamily: ["Roboto", "sans-serif"].join(',')
    },
    palette:{
        primario: {
            main: "#f2f0f2",
            light: "#f2f0f2",
            dark: "#f2f0f2",
            contrastText: "#55575a"
        },
        secundario: {
            main: "#55575a", // Influye el borde
            light: "#f2f0f2",
            dark: "#f2f0f2",
            contrastText: "#f2f0f2"
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