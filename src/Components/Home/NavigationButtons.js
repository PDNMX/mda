import React from "react";
import {Box, Button} from "@mui/material";
import {withStyles} from "@mui/styles"
import Settings from "@mui/icons-material/Settings";
import Computer from "@mui/icons-material/Computer";
import Description from "@mui/icons-material/Description";
import ShoppingCart from "@mui/icons-material/ShoppingBasket";

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
        "&:hover": {
            background: '#ffe01b',
            backgroundColor: '#ffe01b'
        }
    }*/
});

const NavigationButtons = props => {
    const {classes, filters, setFilters} = props;
    const {resourceType} = filters ? filters: "";
    //const buttonClass = selected => selected ? classes.selectedButton : classes.button;
    const handleSetFilters = rt => setFilters({...filters, resourceType: rt});
    const btColor = active => active ? "secundario": "primario";

    return <div className={classes.root}>
        <Box className={classes.box}>
            <Box p={1}>
                <Button variant="contained"
                        color={btColor(resourceType === 'all')}
                        startIcon={<ShoppingCart/>}
                        //className={buttonClass( resourceType === "all" )}
                        onClick={() => handleSetFilters("all")}
                >
                    Todos los recursos
                </Button>
            </Box>
            <Box p={1}>
                <Button variant="contained"
                        color={btColor(resourceType === 'api')}
                        startIcon={<Settings/>}
                        //className={buttonClass( resourceType === "api")}
                        onClick={() => handleSetFilters("api")}
                >
                    APIs
                </Button>
            </Box>
            <Box p={1}>
                <Button variant="contained"
                        color={btColor(resourceType === 'sys')}
                        //className={buttonClass(resourceType === "sys")}
                        startIcon={<Computer/>}
                        onClick={() => handleSetFilters("sys")}
                >
                    Sistemas
                </Button>
            </Box>
            <Box p={1}>
                <Button variant="contained"
                        color={btColor(resourceType === 'doc')}
                        //className={buttonClass(resourceType === "doc")}
                        startIcon={<Description/>}
                        onClick={() => handleSetFilters("doc")}
                >
                    Documentación
                </Button>
            </Box>
        </Box>
    </div>
};


export default withStyles(styles)(NavigationButtons);