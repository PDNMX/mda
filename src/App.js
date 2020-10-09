import React from 'react';
import Home from "./Components/Home/Home";
import P404 from "./Components/P404";
//import Product from "./Components/ProductDetails/ProductDetails"
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const theme = createMuiTheme({
    typography: {
        fontFamily: ["Noto Sans SC", "sans-serif"].join(',')
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
