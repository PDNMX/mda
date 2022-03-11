import React from 'react';
import Home from "./Components/Home/Home";
import P404 from "./Components/P404";
//import Product from "./Components/ProductDetails/ProductDetails"
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const theme = createTheme({
    typography: {
        fontFamily: ["Roboto", "sans-serif"].join(',')
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    {/*<Route exact path="/product/:id">
                        <Product/>
                    </Route>*/}
                    <Route path="*">
                        <P404/>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
