import React, {useState} from "react";
import {Box, Button} from "@mui/material";
import {withStyles} from "@mui/styles"
import Settings from "@mui/icons-material/Settings";
import Computer from "@mui/icons-material/Computer";
import Description from "@mui/icons-material/Description";
import ShoppingCart from "@mui/icons-material/ShoppingBasket";
import {NavLink} from "react-router-dom";

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
    /*button: {
        margin : theme.spacing(1),
        "&:focus": {
            background: '#ffe01b',
            backgroundColor: '#ffe01b'
        },
        "&:hover": {
            background: '#ffe01b',
            backgroundColor: '#ffe01b'
        }
    },
    selectedButton:{
        margin : theme.spacing(1),
        //color: '#ffe01b',
        "&:focus": {
            background: '#ffe01b',
            backgroundColor: '#ffe01b'
        },
        "&:hover": {api
            background: '#ffe01b',
            backgroundColor: '#ffe01b'
        }
    }*/
});

const NavigationButtons = props => {
    const {classes} = props;
    const btColor = active => active ? "secundario": "primario";

    const [resourceType,setResourceType] = useState('all');

    return <div className={classes.root}>
        <Box className={classes.box}>
            <Box p={1}>
                <Button variant="contained"
                        color={btColor(resourceType === 'all')}
                        startIcon={<ShoppingCart/>}
                        onClick={() => setResourceType("all")}
                        component={NavLink} to={"all"}

                >
                    Todos los recursos
                </Button>
            </Box>
            <Box p={1}>
                <Button variant="contained"
                        color={btColor(resourceType === 'api')}
                        startIcon={<Settings/>}
                        onClick={() => setResourceType("api")}
                        component={NavLink} to={"api"}
                >
                    APIs
                </Button>
            </Box>
            <Box p={1}>
                <Button variant="contained"
                        color={btColor(resourceType === 'sys')}
                        startIcon={<Computer/>}
                        onClick={() => setResourceType("sys")}
                        component={NavLink} to={"sys"}
                >
                    Sistemas
                </Button>
            </Box>
            <Box p={1}>
                <Button variant="contained"
                        color={btColor(resourceType === 'doc')}
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