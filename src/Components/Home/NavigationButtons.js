import React from "react";
import {Box, Button, withStyles} from "@material-ui/core";
import Settings from "@material-ui/icons/Settings";
import Computer from "@material-ui/icons/Computer";
import Description from "@material-ui/icons/Description";
import ShoppingCart from "@material-ui/icons/ShoppingBasket";

const styles = theme => ({
    root:{
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(3)
    },
    box: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    button: {
        margin : theme.spacing(1)
    },
    selectedButton:{
        margin : theme.spacing(1),
        background: '#ffe01b'
    }
});

const NavigationButtons = props => {
    const {classes} = props;

    return <div className={classes.root}>
        <Box className={classes.box}>
            <Button variant="contained"
                    startIcon={<ShoppingCart/>}
                    className={classes.selectedButton}
            >
                Todos los recursos
            </Button>
            <Button variant="contained"
                    startIcon={<Settings/>}
                    className={classes.button}
            >
                APIs
            </Button>
            <Button variant="contained"
                    className={classes.button}
                    startIcon={<Computer/>}
            >
                Sistemas
            </Button>
            <Button variant="contained"
                    className={classes.button}
                    startIcon={<Description/>}
            >
                Documentación
            </Button>
        </Box>
    </div>

};


export default withStyles(styles)(NavigationButtons);