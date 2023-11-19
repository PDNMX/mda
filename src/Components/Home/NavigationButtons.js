import React, {useState} from "react";
import {Box, Button} from "@mui/material";
import {withStyles} from "@mui/styles"
import Settings from "@mui/icons-material/Settings";
import Computer from "@mui/icons-material/Computer";
import Description from "@mui/icons-material/Description";
import ShoppingCart from "@mui/icons-material/ShoppingBasket";
import {NavLink, useLocation} from "react-router-dom";

const styles = theme => ({
    root:{
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    box: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },
});

const NavigationButtons = props => {
    const {classes} = props;
    const btColor = active => active ? "secundario": "primario";

    const[setResourceType] = useState('all');

    const location = useLocation();

    let path = location.pathname.split("/")[2];

    if(!path){
        path ='all';
    }

    return <div className={classes.root}>
        <Box className={classes.box}>
            <Box p={1}>
                <Button variant="contained"
                        color={btColor( path.includes('all'))}
                        startIcon={<ShoppingCart/>}
                        onClick={() => setResourceType("all")}
                        component={NavLink} to={"all"}

                >
                    Todos los recursos
                </Button>
            </Box>
            <Box p={1}>
                <Button variant="contained"
                        color={btColor(path.includes('api'))}
                        startIcon={<Settings/>}
                        onClick={() => setResourceType("api")}
                        component={NavLink} to={"api"}
                >
                    APIs
                </Button>
            </Box>
            <Box p={1}>
                <Button variant="contained"
                        color={btColor(path.includes('sys'))}
                        startIcon={<Computer/>}
                        onClick={() => setResourceType("sys")}
                        component={NavLink} to={"sys"}
                >
                    Sistemas
                </Button>
            </Box>
            <Box p={1}>
                <Button variant="contained"
                        color={btColor(path.includes( 'doc'))}
                        startIcon={<Description/>}
                        onClick={() => setResourceType("doc")}
                        component={NavLink} to={"doc"}
                >
                    Documentación
                </Button>
            </Box>
        </Box>
    </div>
};


export default withStyles(styles)(NavigationButtons);