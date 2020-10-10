import React from "react";
import {Box, Button, withStyles} from "@material-ui/core";
import Settings from "@material-ui/icons/Settings";
import Computer from "@material-ui/icons/Computer";
import Description from "@material-ui/icons/Description";
import ShoppingCart from "@material-ui/icons/ShoppingBasket";

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
    button: {
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
        background: '#ffe01b',
        "&:focus": {
            background: '#ffe01b',
            backgroundColor: '#ffe01b'
        },
        "&:hover": {
            background: '#ffe01b',
            backgroundColor: '#ffe01b'
        }
    }
});

const NavigationButtons = props => {
    const {classes, filters, setFilters} = props;

    const {resourceType} = filters? filters: "";

    const buttonClass = selected => selected ? classes.selectedButton : classes.button;

    const handleSetFilters = rt => setFilters({...filters, resourceType: rt});

    return <div className={classes.root}>
        <Box className={classes.box}>
            <Button variant="contained"
                    startIcon={<ShoppingCart/>}
                    className={buttonClass( resourceType === "all" )}
                    onClick={() => handleSetFilters("all")}
            >
                Todos los recursos
            </Button>
            <Button variant="contained"
                    startIcon={<Settings/>}
                    className={buttonClass( resourceType === "api")}
                    onClick={() => handleSetFilters("api")}
            >
                APIs
            </Button>
            <Button variant="contained"
                    className={buttonClass(resourceType === "sys")}
                    startIcon={<Computer/>}
                    onClick={() => handleSetFilters("sys")}
            >
                Sistemas
            </Button>
            <Button variant="contained"
                    className={buttonClass(resourceType === "doc")}
                    startIcon={<Description/>}
                    onClick={() => handleSetFilters("doc")}
            >
                Documentación
            </Button>
        </Box>
    </div>

};


export default withStyles(styles)(NavigationButtons);